<template>
    <div>
        A页面<router-link to="/">返回</router-link>

        <hr/>
        默认显示B.vue
        <li @click="who='B'">点击,在下面，显示B.vue</li>
        <li @click="who='C'">点击,在下面，显示C.vue</li>
        <li @click="who='D'">点击,在下面，显示D.vue</li>
        <hr/>
        <keep-alive>
            <component :is="who"></component>
        </keep-alive>

        <hr/>
    </div>
</template>
<script>
    import Axios from 'axios'
    import B from './B.vue'
    import C from './C.vue'
    import D from './D.vue'
    export default {
        components:{
        B,C,D
        },
        data(){
            return {
                who:B
            }
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