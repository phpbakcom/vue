<template>
    <div>
        方法一。使用filter<br/>
    <input v-model="myText" @input="handleInput" /><br/>
        <li v-for="(data,index) in datalist"><!--datalist是个数组-->
        {{data}}
        </li>
        方法二。使用计算属性<br/>
        <input v-model="myText1"  /><br/>
        <li v-for="(data1,index1) in mydataComputed"> <!--mydata就是计算属性，里面有任何变动，就会重新计算-->
            {{data1}}
        </li>
    </div>
</template>
<script>
    export default{
        name:'msearch1',
        data(){
            return{
                datalist:['aaaa','bbbbb','ccccc','dddddd','eeeee','abc','aaaj'],
                datalist2:['aaaa','bbbbb','ccccc','dddddd','eeeee','abc','aaaj'],
                myText:'',
                myText1:'',
            }
        },
        created(){
            //filter user
            var arr = [1,2,3,4,5,6]
            var newlist = arr.filter(item=>{
                return item>=3
            })
            console.log(newlist)
        },
        computed:{
            mydataComputed(){
                return this.datalist.filter(item=>item.indexOf(this.myText1)>-1)
            }
        },
        methods:{
            handleInput(){
                var newlist = this.datalist2.filter(item=>item.indexOf(this.myText)>-1)
                this.datalist = newlist
            }
        }
    }
</script>