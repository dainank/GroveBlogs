import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'July 5, 2021' },
      { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'July 5, 2021' },
      { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'July 5, 2021' },
      { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'July 5, 2021' },
    ],
    editPost: null,
    user: null, // whether a user is logged in
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload; // true/false
    },
    toggleEditPost(state, payload) {  // setter
      state.editPost = payload;
    },
    setProfileInfo(state, doc) {  // doc === dbResults
      state.profileId = doc.id,
        state.profileEmail = doc.data().email;  // see firebase
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().username;
    },
    setProfileInitials(state) { // getting first initial from first name added to first intiial from last name
      state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join('') + state.profileLastName.match(/(\b\S)?/g).join('');
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const database = await db.collection('users').doc(firebase.auth().currentUser.uid); // getCurrentUser
      const dbResults = await database.get(); // user
      commit("setProfileInfo", dbResults);  // setState
      commit("setProfileInitials");
    },
  },
  modules: {
  }
})
