<template>
    <div>
        <li v-for="(data,index) in datalist" :key="index">{{data.name}}--{{data.url}}</li>
        <br/><br/>
     当前第{{page}}页 / 总共{{totalpage}}页 <span @click="get1">首页</span>&nbsp;&nbsp;
        <span @click="get2">上一页</span>&nbsp;&nbsp;
        <span @click="get3">下一页</span>&nbsp;&nbsp;
        <span @click="get4">尾页</span>
    </div>
</template>
<style scoped>

</style>
<script>
    import Axios from 'axios'
    export default {
        name:'datalist',
        data(){
            return {
                dataname:'数据列表',
                datalist:[],
                page:1,
                pagesize:10,
                totalpage:0,
            }
        },
        created(){
            this.getlists()
        },
        methods:{
            getlists(){
                Axios.get('http://localhost/gateway/app/api.php?m=getLists&page='+this.page+'&pagesize='+this.pagesize).then((res)=>{
                    console.log(res);
                    this.datalist = res.data.data
                    this.totalpage = res.data.rows
                })
            },
            get1(){
                this.page = 1
                this.getlists()
            },
            get2(){
                this.page = this.page-1
                if(this.page<1) this.page=1
                this.getlists()
            },get3(){
                alert(3)
                this.page = this.page+1
                if(this.page>this.totalpage) this.page=this.totalpage
                this.getlists()
            },get4(){
                this.page=this.totalpage
                this.getlists()
            }
        }
    }
</script>