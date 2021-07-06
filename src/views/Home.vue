<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <!-- look for prop post in BlogPost component and equate to welcomeScreen property  -->
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <!-- for loop of array ~ index represents current object -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Recent Blog Posts</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if='!user' class="updates">
      <div class="container">
        <h2>Register Today!</h2>
        <router-link class="router-button" to="#">
          Register for GroveNote! <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    // populate firebase
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles including everything that I am learning in programming since 2019.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        // landing page posts
        {
          title: "First blog post title!",
          blogHTML: "First blog post content!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "Second blog post title!",
          blogHTML: "Second blog post content!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang='scss' scoped>
.blog-card-wrap {
  .container {
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 40px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 30px;
      }
    }
  }
}
</style>
