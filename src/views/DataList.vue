<template>
    <div>
        <li v-for="(data2,index1) in datalist" :key="'data'+index1">
            {{data2.name}}--{{data2.url}}
        </li>
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
        name:'datalist2',
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
                let _this =this
                Axios.get('/apis/gateway/p_devops/app/api.php?m=getLists&page='+_this.page+'&pagesize='+_this.pagesize).then((res)=>{
                    console.log(res);
                    _this.datalist = res.data.data
                    _this.totalpage = res.data.rows
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