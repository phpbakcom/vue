<template>
    <div>
        使用ref:&nbsp;&nbsp;&nbsp;&nbsp;<input ref="myText"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="bt">点击获取输入框的值</button>
        <br/>
        {{myTextValue}}
        <hr/>
        <refsChild ref="myChild"></refsChild>
    </div>
</template>
<script>
    import refsChild from './VuerefsChild.vue'
    export default {
        name:'refs',
        components:{
            refsChild
        },
        data(){
            return {
                myTextValue:''
            }
        },
        methods:{
            bt(){
                this.myTextValue = this.$refs.myText.value;
            }
        }
    }
</script>