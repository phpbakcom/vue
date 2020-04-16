<template>
    <div>
        <div>{{envstring}}</div>
        <hr/>
        0.基础知识--AXIOS使用的例子:<router-link to="/a">转向A页面</router-link><br/>
        1.基础知识--VUEX使用的例子：<router-link to="/vuex1">点击进入</router-link><br/>
        2.基础知识--简单路由的例子 this.$base的使用：<router-link to="/b">转向B页面</router-link><br/>
        3.基础知识--AXIOS使用的例子 $route.params.sid:<router-link to="/axios2/3456">转向axios2页面</router-link><br/>
        4.基础知识--子路由的例子 VUE插值v-html v-text v-if v-show  条件渲染v-else v-else-if :<router-link to="/c">c页面在当前页显示</router-link><br/>
        5.基础知识--子路由的例子 列表key值设置，列表数组检测 列表常渲染 v-for="(data,index) in datas" /  v-for="(data,index) of datas" :<router-link to="/d">d面面在当前页显示</router-link><br/>
        <router-view></router-view>
        6.基础知识--CSS绑定与Style绑定: <router-link to="/stylebind">点击进入</router-link><br/>
        7.基础知识--父传子props，属性验证props 子传父$emit : <router-link to="/father">点击进入</router-link><br/>
        8.基础知识--父传子 子传父 refs : <router-link to="/refs">点击进入</router-link><br/>
        9.基础知识--组件非父子通信，事件总线bus = new Vue()/ $emit / $on :  效果等于VUEX<router-link to="/emiton">点击进入</router-link><br/>
        10.基础知识--动态组件component keep-live<router-link to="/a">点击进入</router-link><br/>
        11.基础知识--slot插造<router-link to="/slot1">点击进入</router-link><br/>
        12.基础知识--配置反向代理，请看vue.config.js<br/>
        13.基础知识--过滤器<router-link to="/">点击进入</router-link><br/>
        14.基础知识--自定义指令directives 可操作DOM<router-link to="/">点击进入</router-link><br/>
        15.基础知识--单个元素过渡transition，多个元素过渡transition，多个组件过渡transition，列表过渡transition-group<router-link to="/">点击进入</router-link><br/>
        16.基础知识--列表过滤(模糊查询) input事件（只要value值改变） 使用计算属性<router-link to="/msearch">点击进入</router-link><br/>
        <hr/>
        1.综合实例--用户管理的例子:<router-link to="/user1">点击进入</router-link><br/>
        2.综合实例--操作接口的用户管理的例子(vue-resource):<router-link to="/user2">点击进入</router-link><br/>
        3.综合实例--图的显示 加轮播:<router-link to="/lunbo">点击进入</router-link><br/>
        4.综合实例--列表分页:<router-link to="/datalist">点击进入</router-link><br/>
        5.综合实例--简易购物车:<router-link to="/goods">点击进入</router-link><br/>
        6.综合实例--个人博客：<router-link to="/blog">点击进入</router-link><br/>
        <hr/>
        <div>
            v-for使用，将表单中的内容提交到子组件中显示：<input v-model="inputValue" />
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
        表单绑定/表单修饰符<br/><br/>
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

        事件处理试例----三种写法一样的效果<br/>
        <button @click="onClickTo">点击显示与隐藏</button> |
        <button @click="onClickTo()">点击显示与隐藏</button> |
        <button @click="isShow=!isShow">点击显示与隐藏</button><br/>
        <div v-show="isShow">这里显示或者隐藏，请看这里</div>
        <br/><br/>
        事件修饰符 stop ----子事件触发，父事件也触发。冒泡事件,stop阻止冒泡事件<br/>
        <ul @click="ulClick">
            <li @click="liClick">ssssssssssssssss弹li click</li>
            <li>bbbbbbbbbbbbbbbbb弹UL click</li>
            <li @click="liClick2($event)">aaaaaaaaaaaaaa弹li2 click</li>
            <li @click="liClick3()">aaaaaaaaaaaaaa弹ul click 与 li3 click</li>
            <li @click.stop="liClick3()">aaaaaaaaaaaaaa弹li3 click</li>
        </ul>
        <br/><br/>
        事件修饰符 prevent ----阻止默认事件,激活自定义事件<br/>
        <a href="http://www.baidu.com" @click.prevent="liClick3()">baidu.com</a>
        <br/>
        <br/>
        事件修饰符 self ----只执行自己默认事件，冒泡事件无效<br/>
        <ul @click.self="ulClick">
            <li @click="liClick3()">UL上有事件，无法冒泡aaaaaaaaaaaaaa弹 li3 click</li>
        </ul>
        <br/>
        <br/>
        事件修饰符 once ----只执行一次事件，以后就不执行了，除非刷新页面，可以再执行一次<br/>
        <ul>
        <li @click.once="liClick3()">只弹一次 li3 click ，再点击无效</li>
        </ul>
        <br/>
        <br/>
        按键修饰符 @keyup.enter  @keyup.13<br/>
        <input @keyup="ku"  />随时提交 ，请打开控制台<br/>
        <input @keyup.13="ku"  />回车提交 ，请打开控制台<br/>
        <input @keyup.enter="ku"  />回车提交 ，请打开控制台<br/>
        <br/>
        <br/>
        过滤器filter-----将字符串的中zj换成zhjun<br/>
        原始写法：<input type="text" :value="fl(vuefilterDatas)" /><br/>
        过滤写法：<input type="text" :value="vuefilterDatas | thisFilterName" /><br/>
        <br/>
        <br/>
        自定义指令directives 可操作DOM<br/>
        <div v-hello>11111111111</div>
        <div v-hello2="'red'">11111111111</div>
        <div v-hello2="'yellow'">11111111111</div>
        <br/>
        <br/>
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
    import Axios from 'axios'
    import Vue from 'vue'
    import TodoItem from './TodoItem.vue'
    const vueapp = process.env.VUE_APP_TITLE
    Vue.filter('thisFilterName',function(data){
        return data.replace('zj','filter zhjun')
    })//定义过滤器
    Vue.directive('hello',{
        inserted(el){
        //指令的生命周期
            console.log('v-hello调用')
            console.log(el) //可以取到DOM
            el.style.background = 'red'
        },
    })
    Vue.directive('hello2',{
        inserted(el,bind){
            //指令的生命周期
            console.log('v-hello调用')
            console.log(el) //可以取到DOM
            el.style.background = bind.value
        },
        update(el,bind){
            el.style.background = bind.value
        }
    })
    //自定义指令directives
console.log(process.env)
    export default{
        components:{
            'todoitem':TodoItem
        },
        data:function(){
            return {
                vuefilterDatas:'this is zj vue!',
                isShow:true,
                mynumber:0,
                mytext:'',
                checkgroup:[],
                radios:'',
                ischeckbox:false,
                inputValue:'表单中的值',
                list:[],
                envstring:'当前运行的环境是:'+process.env.VUE_APP_TITLE,
                dataslist:''
            }
        },
        created(){
            console.log(process.env.VUE_APP_TITLE)
            Axios.get('/phpbak/api.php?m=news&type=1').then((res)=>{
                console.log(res);
            })
        },
        methods:{
            hc:function(){
                alert(123)

                console.log(vueapp)
                this.list.push(this.inputValue)
            },
            hdelete:function(index){
                this.list.splice(index)
            },
            onClickTo(){
                this.isShow = !this.isShow
            },
            ulClick(){
                alert('ul click ')
            },
            liClick(ev){
                ev.stopPropagation() //加这句可以阻止冒泡行为
                alert('li click ')
            },
            liClick2(ev){
                ev.stopPropagation() //加这句可以阻止冒泡行为
                alert('li2 click')
            },liClick3(){
                alert('li3 click')
            },ku(ev){
                console.log(ev)
                if(ev.keyCode===13){
                    console.log('你按的enter键')
                }
            },fl(str){
                return str.replace('zj','zhjun')
            }
        }
    }
</script>