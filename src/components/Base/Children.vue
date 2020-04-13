<template>
    <div>
        <hr/>
        这是子组件 <br/>
        props: ['message', 'msg', 'data'] //声明一个自定义的属性,名称在父组中使用<br/>
        {{message}}<br/>
        {{msg}}<br/>
        <li v-for="(datai,index) in data" :key="'D'+index">{{datai}}</li>
        <hr/>
        <button @click="tofather">点击 子传父 测试</button> //this.$emit('定义父组的事件'，‘子组件中传入的值’)
    </div>
</template>
<script>
    export default {
        name: 'children',
        props: ['message', 'msg', 'data'], //声明一个自定义的属性,名称在父组中使用
        //属性验证
        //props:{
        //message:String,
        //msg:NumberObject,
        //arr:Array,
        //bl:Boolean,
        //f:Function,
        //n:null    null是不验证
        //}
        methods:{
            tofather(){
                this.$emit('fatherevent','这是传给父组件中的')
            }
        }
    }
</script>