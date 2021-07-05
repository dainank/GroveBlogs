<template>
  <div class="home">
    <BlogPost :post='welcomeScreen' />  <!-- look for prop post in BlogPost component and equate to welcomeScreen property  -->
    <BlogPost :post='post' v-for='(post, index) in sampleBlogPost' :key='index' />  <!-- for loop of array ~ index represents current object -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Recent Blog Posts</h3>
        <div class="blog-cards">
          <BlogCards :post='post' v-for='(post, index) in sampleBlogCards' :key='index' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost';
import BlogCards from '../components/BlogCard';
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
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
      sampleBlogCards: [
        {blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'July 5, 2021'},
        {blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'July 5, 2021'},
        {blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'July 5, 2021'},
        {blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'July 5, 2021'},
      ],
    };
  },
};
</script>

<style lang='scss' scoped>

.blog-card-wrap {
  .container {
    h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
    }
  }
}

</style>
