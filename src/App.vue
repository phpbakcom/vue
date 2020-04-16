<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">-->
    <router-view/>
    <div>
      <!--
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'" @click="Bt"></code>
        below
      </p>
      <el-button @click="Bt">el-button</el-button>
      <br/>
      -->
      <input @click="Bt" type="button" value="返回首页"/>
    </div>
    <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
    methods:{
        Bt:function(){
            alert('返回首页')
          this.$router.push('/')
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
