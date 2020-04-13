<template>
    <div>
    <button @click="toggle1">切换状态</button>
        <br/>
        <div :class="IsActive?'aClass':'bClass'">我是动态绑定CLASS 三目写法</div>
        <div :class="ClassObj">我是动态绑定CLASS 对象写法</div>
        <div :class="ClassArr">我是动态绑定CLASS 数组写法</div>
        <br/>
        <button @click="ClassBt">数组写法中加样式</button>
        <br/>
        <div :style="'background:'+(IsActive?'red':'yellow')">我是动态绑定STYLE 三目写法</div>
        <div :style="StyleObj">我是动态绑定STYLE 对象写法</div>
        <div :style="StyleArr">我是动态绑定STYLE 数组写法</div>

        <div :style="{background:'yellow'}">我是动态绑定STYL {background:'yellow'} </div>


        <br/>
        <button @click="styleObjBt">对象写法 中加样式</button><br/>
        <button @click="styleArrBt">数组写法 中加样式</button><br/>
        <br/>
    </div>
</template>
<style scoped>
    .aClass{
        color: red;
    }
    .bClass{
        text-decoration:line-through;
    }
    .cClass{
        color:yellow;
        font-style:oblique;
    }
</style>
<script>
    export default{
        name:'stylebind',
        data(){
            return {
                'IsActive':true,
                'StyleArr':[{background:"yellow"}],
                'StyleObj':{
                    background:"red"
                },
                'ClassArr':["aClass","bClass"],
                'ClassObj':{
                    aClass:true,
                    bClass:true
                }
            }
        },
        methods:{
            toggle1(){
                this.IsActive = !this.IsActive
                console.log(this.IsActive)
            },ClassBt(){
                this.ClassArr.push('cClass');
            },styleArrBt(){
                this.StyleArr.push({textDecoration:"lineThrough"})
                console.log(this.StyleArr)
            },styleObjBt(){
                this.StyleObj.textDecoration = "lineThrough"
                console.log(this.StyleObj)
            }
        }
    }
</script>