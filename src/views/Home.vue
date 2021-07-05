<template>
  <div class="home">
    <BlogPost :post='welcomeScreen' />  <!-- look for prop post in BlogPost component and equate to welcomeScreen property  -->
    <BlogPost :post='post' v-for='(post, index) in sampleBlogPost' :key='index' />  <!-- for loop of array ~ index represents current object -->
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost';
export default {
  name: "Home",
  components: { BlogPost },
  data() {  // populate firebase
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost:
          "Weekly blog articles including everything that I am learning in programming since 2019.",
        welcomeScreen: true,
        photo: 'coding',
      },
      sampleBlogPost: [ // landing page posts
        {
          title: 'First blog post title!',
          blogHTML: 'First blog post content!',
          blogCoverPhoto: 'beautiful-stories',
        },
        {
          title: 'Second blog post title!',
          blogHTML: 'Second blog post content!',
          blogCoverPhoto: 'designed-for-everyone',
        },
      ],
    };
  },
};
</script>
