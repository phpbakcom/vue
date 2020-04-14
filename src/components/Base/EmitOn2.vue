<template>
    <div>
        子组件2<br/>
        {{showData}}
    </div>
</template>
<script>
    import bus from './EmitOnBus'
    export default {
        name:"em2",
        data(){
            return {
                showData:''
            }
        },
        created(){
            bus.$on('dataCenter',(data)=>{
                console.log(data)
                this.showData = data
            })
        },
        mounted(){
            // created 与 mounted写在任一个里都可以
            //bus.$on('dataCenter',(data)=>{
           //     console.log(data)
       // })
        },
        destroyed(){
            bus.$off('dataCenter',(data)=>{
                console.log(data)
            })
        }
    }
</script>