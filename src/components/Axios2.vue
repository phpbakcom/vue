<template>
    <div>Axios2
{{$route.params.sid}}
    </div>
</template>
<script>
import Axios from 'axios'
    export default {
        created() {
            Axios.get('/json/data.json').then((res)=>{
                console.log(res);
            })
            Axios.get('/json/data.json',{params:{id:12}}).then((res)=>{
                console.log(res);
            })
            Axios(
                {
                    method:"get",
                    url:"/json/data.json",
                    params:{id:12}
                }
            ).then(res=>{
                console.log(res)})
            //post json
            //application/json
            let data={
                id:12
            }
            Axios.post('/post',data).then(res=>{
                console.log(res)
            })
            Axios(
                {
                    method:'post',
                    url:'/post',
                    data:data
                }
            ).then(res=>{
                console.log(res)
            })
            //form-data 提交表单
            let formData = new FormData()
            for(let key in data){
                formData.append(key,data[key]);
            }
            Axios.post('/post',formData).then(res=>{
                console.log(res)
            })
            //put
            Axios.put('/put',data).then(res=>{
                console.log(res)
            })
            //patch
            Axios.patch('/patch',data).then(res=>{
                console.log(res)
            })
            //delete
            Axios.delete('/delete',{
                params:{id:12}
            }).then(res=>{
                console.log(res)
            })
            Axios.delete('/delete',{
                data:{id:12}
            }).then(res=>{
                console.log(res)
            })
            Axios(
                {
                    method:'delete',
                    url:'/delete',
                    params:{id:12}
                }
            ).then(res=>{
                console.log(res)
            })
            Axios(
                {
                    method:'delete',
                    url:'/delete',
                    data:{id:12}
                }
            ).then(res=>{
                console.log(res)
            })
            //并发请 Axios.all()  Axios.spread()
            Axios.all([
                Axios.get('/json/data.json'),Axios.get('/json/name.json')
            ]).then(
                Axios.spread((des1,des2)=>{
                    //在这里统一处理返回值
                    console.log(des1,des2)
            })
            )


        }
    }
</script>