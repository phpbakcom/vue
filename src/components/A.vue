<template>
    <div>
        A页面<router-link to="/">返回</router-link>
    </div>
</template>
<script>
    import Axios from 'axios'
    import B from './B.vue'
    export default {
        components:{
        B
        },
        created(){
            Axios.get('/json/data.json').then((res)=>{
                console.log(res);
            })
            Axios.get('/json/data.json',{params:{id:12}}).then((res)=>{
                console.log(res);
            })
            Axios(
                {
                    method:"get",
                    url:"/json/data.json",
                    params:{id:12}
                }
            ).then(res=>{
                console.log(res)})
        }
    }
</script>