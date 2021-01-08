<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2" id="sidebar">
        <Sidebar @sendCountryData="getData"></Sidebar>
      </div>
      <div class="col-md-10 p-5" id="content">
        <Content :countryData="countryData"></Content>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
export default {
  components: {
    Sidebar,
    Content,
  },
  data(){
    return{
      countryData : '',
    }
  },
  methods:{
    getData(data){
      this.countryData = data
    }
  },

};
</script>

<style lang="scss" scoped>
.container-fluid {
  #sidebar {
    padding: 0;
  }
}
</style>
