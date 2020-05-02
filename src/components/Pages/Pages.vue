<template>
    <div class="pages">
        <li v-for="(key,index) in datalist" :key="index" >{{key.id}}.{{key.name}}--{{key.url}}</li>
        <div class="turnPage2 zxf_turnPage2 t_c" style="margin-top: 30px;">
          <span class="fistPage mgr10"><a @click="getpages(1)">首</a></span>
          <span @click="getPrePage" class="prev-page mgr10" href="#"></span>
          <span class="total-page" v-if="showpage != '...'?true:false" v-for="(showpage,index2) in getShowPages" :key="'show'+index2">
            <a :class="showpage==page?'on':''" @click="getpages(showpage)"  >{{showpage}}</a>
          </span>
          <a class="ddTag f12 c555 mgl12" v-else>...</a>
          <span @click="getNextPage" class="next-page mgl10"></span>
          <span class="lastPage mgl10 mgr10"><a @click="getpages(totalpage)">末</a></span>
          <span class="totalNum"> 共 <i class="c000"> {{totalpage}} </i> 页 </span>
          <div class="jumpPage"><span>跳转至 </span> <input v-model.number="gopage" type="number"> <span>页</span></div>
          <span class="lastPage mgr10"><a @click="getpagesgo">GO</a></span>
        </div>
    </div>
</template>
<script>
    import Axios from 'axios'
    export default{
        data(){
            return {
                datalist:[],
                page:1,
                pagesize:10,
                totalpage:0,
                gopage:'',
            }
        },
        created(){
            this.getlists()
        },
        computed:{
            getShowPages(){
                let start = this.page
                let end = this.totalpage
                let arr = []
                if(start<6){
                    if(end<6){
                        for(let i=1;i<=end;i++){
                            arr.push(i)
                        }
                    }else if(end===6){
                        arr = [1,2,3,4,5,'...',end]
                    }
                    else{
                        arr = [1,2,3,4,5,6,'...',end]
                    }
                }else if(start > end-5){
                    if(end==6 && start==6){
                        arr = [1,'...',end-4,end-3,end-2,end-1,end]
                    }else{
                        arr = [1,'...',end-5,end-4,end-3,end-2,end-1,end]
                    }
                }else{
                    arr =  [1,'...',start,start+1,start+2,start+3,start+4,'...',end]
                }
                return arr
            }
        },
        methods:{
                getlists(){
                    let _this =this
                    Axios.get('/apis/gateway/p_devops/app/api.php?m=getLists&page='+_this.page+'&pagesize='+_this.pagesize).then((res)=>{
                        console.log(res);
                        _this.datalist = res.data.data
                        _this.totalpage = res.data.rows
                    })
                },
            getpages(curPage){  //去第几页
                this.page = curPage
                this.getlists()
            },
            getpagesgo(){ //GO到第几页

                if(this.gopage < 1){
                    this.page = 1
                }
                if(this.gopage > this.totalpage){
                    this.page = this.totalpage
                }
                this.getlists()
            },
            getPrePage(){//上一页
                    if(this.page-1<1){
                        return ''
                    }else{
                        this.page = this.page-1
                        this.getlists()
                    }
            },
            getNextPage(){//下一页
                    if(this.page+1>this.totalpage){
                        return '';
                    }else{
                        this.page = this.page+1
                        this.getlists()
                    }
            }
        }
    }
</script>
<style scoped>
    .pages{color:#555;font-size:12px;font-family:pingfang sc,"microsoft yahei";}
    a,a:visited{ text-decoration:none;font-size:12px}
    a:hover,a:active{ text-decoration:none;}
    a:focus {outline:none;-moz-outline:none;}

    .t_c{text-align:center}
    .mgr10{margin-right:10px;}
    .f12{font-size:12px;}
    .c555,a.c555{color:#555}
    .mgl10{margin-left:10px;}
    .mgl12{margin-right:10px;}

    .turnPage2{padding:20px 0}
    .turnPage2 .total-page a{width: 30px;height: 30px;margin: 0 2px 0px 3px;color: #555555;font-size: 14px;display:inline-block;line-height: 30px;vertical-align: middle;background: transparent;border-radius: 50%;text-align: center;overflow: hidden;}
    .turnPage2 .total-page a.on{background: #4991E1;color: #fff;text-decoration:none;}
    .turnPage2 .total-page a:hover{background: #e7e7e7;}
    .turnPage2 .total-page a.on:hover{background: #4991E1;}
    .turnPage2 .next-page,.turnPage2 .prev-page{display: inline-block;*display: inline;*zoom: 1;width: 22px;height: 22px;border-radius: 3px;border: 1px solid #dcdcdc;background-color: #fff;cursor: pointer;vertical-align: middle;overflow: hidden;text-indent: 999px;}
    .turnPage2 .fist-page,.turnPage2 .last-page{display: inline-block;*display: inline;*zoom: 1;width: 44px;height: 22px;line-height: 22px;border-radius: 3px;border: 1px solid #dcdcdc;background-color: #fff;cursor: pointer;vertical-align: middle;overflow: hidden;}
    .turnPage2 .fist-page:hover,.turnPage2 .last-page:hover{background-color: #f5f5f5;color: #555;}
    .turnPage2 .next-page{background: url(../../assets/public/page_ico.png) no-repeat -20px 0px #fff;}
    .turnPage2 .next-page:hover{background:url(../../assets/public/page_ico.png) no-repeat -20px 0px #f5f5f5;}
    .turnPage2 .prev-page{background: url(../../assets/public/page_ico.png) no-repeat -20px -21px #fff;}
    .turnPage2 .prev-page:hover{background:url(../../assets/public/page_ico.png) no-repeat -20px -21px #f5f5f5;}

    /*分页*/
    .zxf_turnPage2 .total-page a {width: 25px;height: 25px;line-height: 25px;border: 1px solid #BEBEBE;border-radius: 50%;margin: 0;margin-right: 10px;}
    .zxf_turnPage2 .total-page a:hover {background-color: transparent;;border-color: #99CCFF;color: #5CADFF;}
    .zxf_turnPage2 .total-page a.on {background-color: #009DFD;/*box-shadow:0px 0px 8px rgba(0,95,192,0.53);*/border-color: #009DFD;}
    .zxf_turnPage2 .total-page a.on:hover {background-color: #008de3;color: #fff;}
    .zxf_turnPage2 .prev-page {width: 25px;height: 25px;line-height: 25px;border-radius: 50%;border: 1px solid #BEBEBE;background: url(../../assets/public/icon_pagePrevTag.png) 6px center no-repeat;background-size: 11px 11px;}
    .zxf_turnPage2 .prev-page:hover {background: url(../../assets/public/icon_pagePrevTagH.png) 6px center no-repeat;border-color: #99CCFF;background-size: 11px 11px;}
    .zxf_turnPage2 .next-page {width: 25px;height: 25px;border-radius: 50%;border: 1px solid #BEBEBE;background: url(../../assets/public/icon_pageNextTag.png) 8px  center no-repeat;background-size: 11px 11px;}
    .zxf_turnPage2 .next-page:hover {background: url(../../assets/public/icon_pageNextTagH.png) 8px  center no-repeat;border-color: #99CCFF;background-size: 11px 11px;}

    /* 2020 04/26增加样式 :Start */
    .turnPage2 .fistPage , .turnPage2 .lastPage {display: inline-block;}
    .turnPage2 .fistPage a, .turnPage2 .lastPage a {display: inline-block; color: #888; text-indent: 0; line-height: 28px; width: 28px; height: 28px; border-radius: 14px; border: 1px solid #dcdcdc; vertical-align: middle;}
    .turnPage2 .fistPage:hover a, .turnPage2 .lastPage:hover a {color: #5CADFF; border-color: #5CADFF;}
    .turnPage2 .totalNum {display: inline-block; height: 30px; line-height: 30px; font-size: 14px; color: #555; vertical-align: middle;}
    .turnPage2 .totalNum .c000 { color: #000; }
    .turnPage2 .jumpPage {display: inline-block; height: 30px; margin-left: 20px; margin-right: 8px; color: #888; line-height: 30px; vertical-align: middle; }
    .turnPage2 .jumpPage input { display: inline-block; height: 28px; width: 48px; padding: 0 5px; margin: 0 5px; outline: none; border: 1px solid #BEBEBE; border-radius: 14px; text-align: center;}
    /* 2020 04/26增加样式 :End */


</style>