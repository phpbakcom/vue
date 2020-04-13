<template>
    <div>
      b页面<router-link to="/">返回</router-link>
        {{msg}}
        <hr/>
        <li v-for="(data,index) in list" @click="hclick(index)">{{data}}</li>
        <hr/>
    </div>
</template>
<script>
    import router from '../router'
    export default{
        data() {
            return{
                msg:this.$base64.encode('dankogai'),
                list:['film1','film2','film3']
            }
        },
        methods:{
            hclick:function(index){
                router.push("/testid/"+index)
            }
        }
    }
</script>