<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >GroveNote</router-link
        >
      </div>
      <div class="nav-links">
         <ul v-show="!mobile">   <!-- show if mobile false -->
          <router-link class="link" to="#">Home</router-link>
          <!-- TODO: Update Routes -->
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />  
    <!-- Mobile -->
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">    <!-- show if mobileNav true -->
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      mobile: null, // true/false mobile view
      mobileNav: null, // true/false mobile sidebar open
      windowWidth: null,
    };
  },
  created() {
      window.addEventListener('resize', this.checkScreenSize);
      this.checkScreenSize();
  },
  methods: {
    checkScreenSize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        // if screen size small
        this.mobile = true;
        return;
      } // if larger screen
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      // switch boolean
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
// only within this component

header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
      transition: all 1s ease;
  }

  .mobile-nav-enter {   // transition start
      transform: translateX(-250px);
  }

  .mobile-nav-enter-to{
      transform: translateX(0);
  }

  .mobile-nav-leave-to{
      transform: translateX(-250px);
  }
}
</style>