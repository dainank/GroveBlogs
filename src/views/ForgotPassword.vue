<template>
  <div class="reset-password">
      <Modal v-if='modalActive' v-on:close-modal='closeModal'/>
      <Loading v-if='loading'/>
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Enter your email to reset your password:</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <envelope class="icon" />
          </div>
        </div>
        <button>Reset Password</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import envelope from "../assets/Icons/envelope-regular.svg";
import Modal from '../components/Modal.vue';
import Loading from '../components/Loading.vue';
export default {
  name: "ForgotPassword",
  data() {
      return {
          email: null,
          modalActive: false,    // toggle on-ff
          modalMessage: '',
          loading: null,
      }
  },
  components: {
    envelope,
    Modal,
    Loading,
  },
  methods: {
      closeModal() {
          this.modalActive = !this.modalActive;
          this.email = '';  // clear email
      }
  }
};
</script>

<style lang='scss' scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        margin-bottom: 32px;
      }
    }
  }
}
</style>