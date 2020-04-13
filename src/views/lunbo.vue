<template>
    <div>
        轮播与图的显示<br/>
        <img src="../../public/images/1.png" /><br/><br/>
        轮播--错误的写法，图无法显法<br/>
        <img  v-for="(isrc,i) in imgsrc" :key="'key1'+i" :src="isrc"/><br/><br/>
        轮播--正确的写法<br/>
        <img  v-for="(isrcgood,i_good) in imgsrc_good"
              :key="'key2'+i_good"
              :src="isrcgood.img"
              v-show="i_good==n"
              @click="gotourl(isrcgood)"/><br/><br/>
        <li v-for="(v,ii) in imgsrc" :key="'key3'+ii" :class="ii==n?'red':''" >显示轮播点</li>

    </div>
</template>
<style>
    .red{
        color:red;
    }
</style>
<script>
    export default{
        data(){
            return {
                timer:null,
                n:0,
                imgsrc:[
                    '../../public/images/1.png',
                    '../../public/images/2.png',
                    '../../public/images/3.png'
                ],
                imgsrc_good:[
                    {
                        img:require('../../public/images/1.png'),
                        url:'http://www.baidu.com'
                    },
                    {
                        img:require('../../public/images/2.png'),
                        url:'http://www.sohu.com'
                    },{
                        img:require('../../public/images/3.png'),
                        url:"http://qq.com"
                    }
                ]
            }
        },
        methods:{
            playimg(){
                this.timer = setInterval(this.autopay,2000)
            },
            autopay(){
                this.n++
                if(this.n==this.imgsrc_good.length){
                    this.n=0
                }
            },
            gotourl(obj){
                //this.$router.push(obj.url)
                window.location.href=obj.url
            }
        },
        mounted:function(){
            this.playimg()
        },
        destroyed:function(){
            clearInterval(this.timer)
        }
    }
</script>