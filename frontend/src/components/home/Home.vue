<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
    <div class="stats">
      <Stats title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#d54d50" />
      <Stats title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480" />
      <Stats title="Usuários" :value="stat.users" icon="fa fa-user" color="#3282cd" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseUrlApi } from "../../global";
import PageTitle from "../template/PageTitle";
import Stats from "./Stat";
export default {
  name: "Home",
  components: { PageTitle, Stats },
  data() {
    return {
      stat: {}
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseUrlApi}/stats`).then(res => (this.stat = res.data));
    }
  },
  mounted() {
    this.getStats();
  }
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>