<template>
    <div>
    这是父组件 <br/><br/>
        <children @fatherevent="fatherget" :message="fatherdata" msg="this is msg" :data="data"></children>
        <br/>
        这里显示从子组件传来的值：<br/><br/>{{childrendata}}<br/><br/>
    </div>
</template>
<script>
    import children from './FatherChildren.vue'
    export default{
        name:'father',
        components:{
            children
        },
        data(){
            return {
                fatherdata:'我是父组件里的值'+ Math.random(),
                data:['123','456','789'],
                childrendata:''
            }
        },
        methods:{
            fatherget(ev){
                console.log(ev)
                this.childrendata = ev
            }
        }
    }
</script>