<template>
    <div>
        user manage<br/>
        <!-- show user -->
        <ul>
            <li v-for="(data,index) in list">
                <span :class="{contacted_class:data.contacted}">
                <input type="checkbox" class="toggle"  v-model="data.contacted" />
                姓名是：{{data.name}}------邮件是：{{data.email}}
                <button @click="deleteUser(data)" >delete</button>
                </span>
            </li>
        </ul>
        <!-- add user -->
        <form @submit="AddUser">
            <input type="text"  v-model="addUser.aname" />
            <input type="text"  v-model="addUser.aemail" />
            <input type="submit" value="submit" />
        </form>
    </div>
</template>
<style scoped>
    .contacted_class{
        text-decoration:line-through;
    }
</style>
<script>
    export default {
        data(){
            return {
                list:[
                    {
                        name:'zj1',
                        email:'g@126.com',
                        contacted:false
                    },
                    {
                        name:'zj2',
                        email:'g2@126.com',
                        contacted:false
                    },
                    {
                        name:'zj3',
                        email:'g3@126.com',
                        contacted:true
                    }
                ],
                addUser:{
                    aname:'请输入姓名！',
                    aemail:'请输入邮件！'
                }
            }
        },
        methods:{
            AddUser(e){
                alert(11);
                this.list.push({
                    name:this.addUser.aname,
                    email:this.addUser.aemail,
                    contacted:false
                })
                console.log(this.list)
                e.preventDefault() //解决闪屏
            },
            deleteUser(data){
                this.list.splice(this.list.indexOf(data),1) //传入对象data,通过对象删除
                //this.list.splice(data,1) //传入索引index,通过索引删除
            }
        }
    }
</script>