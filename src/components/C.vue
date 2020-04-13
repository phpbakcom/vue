<template>
    <div>
        <hr/>
        c页面<router-link to="/">返回</router-link>
        <br/>
        {{10+20}} <br/>
        {{ 20>10 ? 'aaaa':'bbbb'}}<br/>
        {{ titletext}}<br/>
        {{ htmltext}}<br/>
        v-html:<div v-html="htmltext"></div>
        v-text:<div v-text="htmltext"></div>
        <br/>
        <div v-show="isShow">v-show动态隐蔽与显示</div>
        <div v-if="isCreate">v-if动态创建与删除</div>
        <button @click="isShowCreate" >点击动态隐蔽与显示、动态创建与删除</button>
        <br/>
        1.条件渲染v-else<br/>
        <div v-if="isShow">显示这个v-if</div>
        <div v-else>显示这个v-else</div>
        <br/>
        2.条件渲染. 购物车 v-else<br/>
        <div v-if="isShow">
            <li v-for="(foods,index) in foodslist" :key="'f'+index">{{foods}}</li>
        </div>
        <div v-else>购物车空空如也</div>
        <br/>
        <br/>
        通过数据来断定 v-else<br/>
        <div v-if="foodslist.length">
            <li v-for="(foods,index) in foodslist" :key="'f'+index">{{foods}}</li>
        </div>
        <div v-else>购物车空空如也</div>
        <br/>
        3.条件渲染. 三选一 v-else-if<br/>

        <div v-if="num===1">num为1时显示.v-if</div>
        <div v-else-if="num===2">num为2其它时显示.v-else-if</div>
        <div v-else>num为其它时显示.v-else</div>
        <br/>
        <hr/>
    </div>
</template>
<script>
    export default{
        name:'example',
        data(){
            return {
                titletext:'这是一个插值',
                htmltext:'<h1>我是显示HTML</h1>',
                isShow:true,
                isCreate:true,
                foodslist:['加多宝','可乐','果汁'],
                num:3,
            }
        },
        methods:{
            isShowCreate(){
                this.isShow=!this.isShow
                this.isCreate=!this.isCreate
            }
        }
    }
</script>