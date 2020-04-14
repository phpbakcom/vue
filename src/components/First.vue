<template>
    <div>
        <div>{{envstring}}</div>
        0.基础知识--AXIOS使用的例子:<router-link to="/a">转向A页面</router-link><br/>
        1.基础知识--VUEX使用的例子：<router-link to="/vuex1">点击进入</router-link><br/>
        2.基础知识--简单路由的例子：<router-link to="/b">转向B页面</router-link><br/>
        3.基础知识--AXIOS使用的例子:<router-link to="/axios2">转向axios2页面</router-link><br/>
        4.基础知识--子路由的例子 VUE插值v-html v-text v-if v-show  条件渲染v-else v-else-if :<router-link to="/c">c页面在当前页显示</router-link><br/>
        5.基础知识--子路由的例子 列表key值设置，列表数组检测 列表常渲染 v-for="(data,index) in datas" /  v-for="(data,index) of datas" :<router-link to="/d">d面面在当前页显示</router-link><br/>
        <router-view></router-view>
        6.基础知识--CSS绑定与Style绑定: <router-link to="/stylebind">点击进入</router-link><br/>
        7.基础知识--父传子props，属性验证props 子传父$emit : <router-link to="/father">点击进入</router-link><br/>
        8.基础知识--父传子 子传父 refs : <router-link to="/refs">点击进入</router-link><br/>
        9.基础知识--组件非父子通信，事件总线bus = new Vue()/ $emit / $on :  效果等于VUEX<router-link to="/emiton">点击进入</router-link><br/>
        10.基础知识--动态组件component keep-live<router-link to="/a">点击进入</router-link><br/>
        11.基础知识--slot<router-link to="/slot1">点击进入</router-link><br/>
        <hr/>
        1.综合实例--用户管理的例子:<router-link to="/user1">点击进入</router-link><br/>
        2.综合实例--操作接口的用户管理的例子(vue-resource):<router-link to="/user2">点击进入</router-link><br/>
        3.综合实例--图的显示 加轮播:<router-link to="/lunbo">点击进入</router-link><br/>
        4.综合实例--列表分页:<router-link to="/datalist">点击进入</router-link><br/>
        5.综合实例--简易购物车:<router-link to="/goods">点击进入</router-link>
        <hr/>
        <div>
            <input v-model="inputValue" />
            <button @click="hc">提交</button>
        </div>
        <ul>
            <todoitem 
            v-for="(item,index) of list" 
            v-bind:key="index"
            v-bind:content="item" 
            v-bind:index="index" 
            @delete_one="hdelete"></todoitem>
        </ul>
        <hr/>
        表单绑定。表单修饰符<br/><br/>
        input(绑定字符串) : <br/>
        <input type="text" v-model="inputValue"/> {{inputValue}} <br/><br/>
        textarea (绑定字符串) : <br/>
        <textarea v-model="inputValue"></textarea>{{inputValue}} <br/><br/>
        单个checkbox (绑定BOOL): <br/>
        <input type="checkbox" v-model="ischeckbox"/>记住用户名 <br/>{{ischeckbox}}<br/><br/>
        <br/>
        多选（绑定数组）：<br/>
        <input type="checkbox" v-model="checkgroup" value="php" /> php<br/>
        <input type="checkbox" v-model="checkgroup" value="jsp" /> jsp<br/>
        <input type="checkbox" v-model="checkgroup" value="asp" /> asp<br/>
        {{checkgroup}}<br/>
        <br/>

        单选(绑定字符串)：<br/>
        <input type="radio" v-model="radios" value="php" /> php<br/>
        <input type="radio" v-model="radios" value="jsp" /> jsp<br/>
        <input type="radio" v-model="radios" value="asp" /> asp<br/>
        {{radios}}<br/>
        <br/>
        表单绑定修饰符1,lazy懒同步，不时时同步，节省资源，焦点失去同步<br/>
        <input type="text" v-model.lazy="mytext"/> {{mytext}} <br/><br/>

        表单绑定修饰符2，number限定数字，鸡肋 <br/>
        <input type="text" v-model.number="mynumber"/> {{mynumber}} <br/>
        不如使用以下：<br/>
        <input type="number" v-model="mynumber"/> {{mynumber}} <br/><br/>
        单绑定修饰符3，trim 去左右空格 <br/>
        <input type="text" v-model.trim="mytext"/> |{{mytext}}| <br/><br/>

        <hr/>
    </div>

</template>
<style>
    a{
        color:red;
        font-size:20px;
    }
</style>
<script type="text/javascript">
import TodoItem from './TodoItem.vue'
const vueapp = process.env.VUE_APP_TITLE
console.log(process.env)
    export default{
        components:{
            'todoitem':TodoItem
        },
        data:function(){
            return {
                mynumber:0,
                mytext:'',
                checkgroup:[],
                radios:'',
                ischeckbox:false,
                inputValue:'表单中的值',
                list:[],
                envstring:'当前运行的环境是:'+process.env.VUE_APP_TITLE
            }
        },
        created(){
            console.log(process.env.VUE_APP_TITLE)
        },
        methods:{
            hc:function(){
                alert(123)

                console.log(vueapp)
                this.list.push(this.inputValue)
            },
            hdelete:function(index){
                this.list.splice(index)
            }
        }
    }
</script>