<template>
	<li @click="hcdelete">{{content}}</li>
</template>
<script type="text/javascript">
	export default{
		props:['content','index'],
		methods:{
			hcdelete:function(){
				alert('del'+this.index);
				this.$emit('delete_one',this.index)
			}
		}
	}
</script>