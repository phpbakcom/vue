<template>
    <div>
        d页面<router-link to="/">返回</router-link>
        <hr/>
        1.v-for  in 数组<br>
        <li v-for="(data,index) in arrlist" :key="'data'+index">{{index}}--{{data}}</li><br/>
        v-for  of 数组<br>
        <li v-for="(data,index) of arrlist" :key="'data'+index">{{index}}--{{data}}</li><br/>
        2.v-for  in 对象<br>
        <li v-for="(data,keys) in objlist">{{keys}}--{{data}}</li><br/>
        v-for  of 对象<br>
        <li v-for="(data,keys) of objlist">{{keys}}--{{data}}</li><br/>
        <br/>
        3.以下方法操作数组，可以检测变动<br/>
        push() pop() shift() unshfit() splice() sort() reverse()  <br/>
        4.检测不了变动<br/>
        filter() concat() slice() map()
        5.解决检测数据变动的方法<br/>
        this.items[indexofitem] = newValue 这种检测不了数据变动  <br/>
        解决  Vue.set(example.items,indexofitem,newValue)
         或者  splice

        <br/>
        <hr/>
    </div>
</template>
<script>
    export default {
        name:"d",
        data(){
            return {
                arrlist:['123','456','789'],
                objlist:{
                    name:'123',
                    name1:'456',
                    name2:'789'
                }

            }
        }
    }
</script>