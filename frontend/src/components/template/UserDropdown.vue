<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{user.name}}</span>
      <div class="user-dropdown-img">
        <Gravatar :email="user.email" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <router-link to="admin">
        <i class="fa fa-cogs"></i>Administração
      </router-link>
      <a href>
        <i class="fa fa-sign-out">Sair</i>
      </a>
    </div>
  </div>
</template>

<script>
import Gravatar from "vue-gravatar";
import { mapState } from "vuex";
export default {
  name: "UserDropdown",
  components: { Gravatar },
  computed: mapState(["user"])
};
</script>

<style>
.user-dropdown {
  height: 100%;
  position: relative;
}
.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.user-button {
  display: flex;
  align-items: center;
  color: #fff;
  height: 100%;
  font-weight: 100;
  padding: 0px 20px;
}

.user-dropdown-img {
  margin: 0px 10px;
}

.user-dropdown-img img {
  /*IMG que o gravatar vai gerar a partir do Email */
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1; /*Se sobrepor */
  border-radius: 8px;

  flex-wrap: wrap; /*Quebrar linha */
  display: flex;
  flex-direction: column;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #000;
  padding: 10px;
  border-radius: 5px;
}
.user-dropdown-content a i {
  padding: 0px 10px 0px 0px;
}
.user-dropdown-content a:hover {
  background-color: #ededed;
  text-decoration: none;
}
</style>