<template>
    <div>
        这是一个简单的购物车的例子<br/>
        <br/>
        <input type="checkbox" @change="mchange" v-model="ischecked"/>全选/反选
        <br/>
        <br/>
        <li v-for="(data,index) in goodlist" :key="'g'+index" >
            <input type="checkbox" v-model="checkboxlist" :value="data" @change="mmchange" /> ---
            {{data}}--
            {{data.name}}--
            <button @click="bt1(data)">-</button>{{data.num}}<button @click="bt2(data)">+</button>
        </li>
        <br/>
        {{checkboxlist}}
        <br/>
        合计：{{total()}}
        <br/>
        <br/>
    </div>
</template>
<script>
export default{
    name:'goods',
    data(){
        return {
            ischecked:false,
            totalnums:0,
            checkboxlist:[],
            goodlist:[
                {
                    name:'百事可乐',
                    num:2,
                    price:10
                },{
                    name:'加多宝',
                    num:3,
                    price:20
                },
                {
                    name:'苹果9袋',
                    num:6,
                    price:5
                }
            ],
        }
    },
    methods:{
        mchange(){
            if(this.ischecked){
                this.checkboxlist = this.goodlist
            }else{
                this.checkboxlist=[]
            }
        },
        mmchange(){
            if(this.checkboxlist.length < this.goodlist.length){
                this.ischecked=false
            }
            console.log(this.ischecked)
        },
        bt1(data){
            data.num=data.num-1
            let lnum =data.num
            if( lnum < 1){
                data.num=1
            }
            console.log(lnum)
        },
        bt2(data){
            //data.num++
            data.num=data.num+1
        },
        total(){
            let inums=0
            for(let i in this.checkboxlist){
                inums+=this.checkboxlist[i].num * this.checkboxlist[i].price
            }
            return inums
        }
    }
}
</script>