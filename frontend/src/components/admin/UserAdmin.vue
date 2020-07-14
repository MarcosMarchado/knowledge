<template>
  <div class="users-admin">
    <b-table hover="true" striped :items="users" :fields="fields"></b-table>
  </div>
</template>

<script>
import { baseUrlApi } from "../../global";
import axios from "axios";
export default {
  name: "UserAdmin",
  data() {
    return {
      mode: "save",
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: value => (value ? "Sim" : "Não")
        },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseUrlApi}/users`;
      axios.get(url).then(res => {
        this.users = res.data;
      });
    }
  },
  mounted() {
    this.loadUsers();
  }
};
</script>

<style>
</style>