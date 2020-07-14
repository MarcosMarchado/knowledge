<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hiddeToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
      <router-link to="/">{{title}}</router-link>
    </h1>
    <UserDropdown v-if="!hiddeUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from "./UserDropdown";
export default {
  name: "Header",
  components: { UserDropdown },
  props: {
    title: String,
    hiddeToggle: Boolean,
    hiddeUserDropdown: Boolean
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible
        ? "fa-angle-left"
        : "fa-angle-down";
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu"); //toggleMenu função da Store
    }
  }
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);
  display: flex;
  justify-content: center;
  align-items: center; /**align-items = crox-axis */
}

.title {
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}
.title a {
  color: #ffffff;
  text-decoration: none;
}

header.header a.toggle {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

header.header a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
}
</style>