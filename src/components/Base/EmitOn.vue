<template>
    <div>
        是父组件<br/>
        在父组件中，组件1传给组件2传值<br/>
        <br/>
        <el></el>
        <br/>
        <e2></e2>
    </div>
</template>
<script>
    import el from './EmitOn1.vue'
    import e2 from './EmitOn2.vue'
    export default {
        name:'emiton',
        components:{
            el,e2
        }
    }

</script>