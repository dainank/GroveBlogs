<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <Edit class="edit" />
      </div>
      <div class="icon">
        <Delete class="delete" />
      </div>
    </div>
    <img
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Published: {{ post.blogDate }}</h6>
      <router-link class="link" to="#">
        View Post <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
export default {
  name: "blogCard",
  props: ["post"],
  components: {
    // register components
    Arrow,
    Edit,
    Delete,
  },
};
</script>

<style lang='scss' scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover { // background hover
        background-color: #303030;

        .edit,
        .delete {   // inner hover look
          path {
            fill: paleturquoise;
          }
        }
      }

      &:nth-child(1) {  // spacing between edit & delete
          margin-right: 8px;    // not touching
      }

      .edit,
      .delete{  // icon within
          pointer-events: none;
          height: 15px;
          width: auto;
      }
    }
  }

  img { // control blog card image
      display: block;
      border-radius: 8px 8px 0 0;
      z-index: 1;
      width: 100%;
      min-height: 200px;
      object-fit: cover;
  }

  .info {   // info box (containing, title, date and link) TODO: consider adding description area
      display: flex;
      flex-direction: column;
      height: 100%;
      z-index: 3;
      padding: 32px 16px;
      color: #000;

      h4 {  // blog title
          padding-bottom: 8px;
          font-size: 20px;
          font-weight: 300;
      }

      h6 {  // date
          font-weight: 400;
          font-size: 12px;
          padding-bottom: 16px;
      }

      .link {   // controlling View Post -> text (link)
          display: inline-flex;
          align-items: center;
          margin-top: auto;
          font-weight: 500;
          padding-top: 20px;
          font-size: 12px;
          padding-bottom: 4px;
          transition: .5s ease-in all;

          &:hover { // unknown??
              color: rgba(48, 48, 48, 0.8)
          }

          .arrow {  // arrow size
              width: 10px;
          }
      }
  }
}
</style>