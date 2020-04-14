<template>
    <div>
        solt111<br/>
        试列1---不具名solt<br/>
        <child0>
            <div>ccccccccc</div>
            <div>aaaaaaaaaaaaaa</div>
            <div>bbbbbbbbbbbbbbb</div>
        </child0>
        试列2---获取父组件中的属性，作用域是父组件，可以直接获取<br/>
        <child1>
            <div><h1>{{data}}</h1></div>
        </child1>
        试列3---不具名solt<br/>
        <child2>
            <div slot="c">ccccccccc</div>
            <div slot="a">aaaaaaaaaaaaaa</div>
            <div slot="b">bbbbbbbbbbbbbbb</div>
        </child2>
    </div>
</template>
<script>
    import child0 from './SlotChild.vue'
    import child1 from './SlotChild1.vue'
    import child2 from './SlotChild2.vue'
    export default {
        name:'solt123',
        components:{
            child0,child1,child2
        },data(){
            return {
                data:'这是父组中的'
            }
        }
    }
</script>
