<template>
    <div>
        子组件1<br/>
        子组件1：<input ref="myText" /> <button @click="sendInfo">发送数据</button>
    </div>
</template>
<script>
    import bus from './EmitOnBus'
    export default{
        name:'em1',
        data(){
            return {
                data:''
            }
        },
        methods:{
            sendInfo(){
                alert('1');
                bus.$emit("dataCenter",this.$refs.myText.value)
              //  bus.$emit("dataCenter",'this.$refs.myText.value')
            }
        }
    }

</script>