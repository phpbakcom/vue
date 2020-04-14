<template>
    <div>
        refs子组件<br/>
        <hr/>
        {{showParentData}}
        <hr/>
    </div>

</template>
<script>
    export default{
        name:'child',
        data(){
            return {
                childData:'这是子组件中的值。传到父组件中显示',
                showParentData:''
            }
        },
        methods:{
            add(parentData){
                this.showParentData = parentData
                return '显示了父组件中传来的：'+parentData
            }
        }
    }
</script>