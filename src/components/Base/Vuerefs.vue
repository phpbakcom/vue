<template>
    <div>
        使用ref实现v-model的效果:<br/>
        <input ref="myText"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="bt">点击获取输入框的值</button>
        <br/>
        {{myTextValue}}
        <hr/>
        使用ref,父组件可以控制件子组件，获取任一属性与方法：<br/>
        <refsChild ref="myChild"></refsChild><br/>
        <button @click="bt2">父子互传</button><br/>
        <br/>
        父组件直接获取子组件中的属性<br/>
        获取子组件（子传父）：{{childToParent}}<br/><br/>
        通过子组件中的方法，将父组件中的值传给子组件<br/>
        给子组件传值（父传子）返回的值：{{parentToChild}}<br/>

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
                myTextValue:'',
                childToParent:'',
                parentToChild:''
            }
        },
        methods:{
            bt(){
                this.myTextValue = this.$refs.myText.value;
            },
            bt2(){
                this.childToParent = this.$refs.myChild.childData;
                this.parentToChild = this.$refs.myChild.add('父组件中的值')
            }
        }
    }
</script>