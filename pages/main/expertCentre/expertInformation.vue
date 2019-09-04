<template>
    <div class="panel">
        <div class="search">
            <span display = "inline-block" >您想找：<input ref="searchInp" @focus="mouseEvent(searchData,'focus')"  @blur="mouseEvent(searchData,'blur')"
                            type="text" v-model="searchData">
            </span>
            <span> <button @click="searchButton" >搜索</button></span>
        </div>

        <br height="5px">

        <div id="expert" >
            <div  v-for="(expertdata,index) in expertDatabases"  class="person">
                <img  src="../../../assets/img/jobs.png"  alt=""
                      :id="index" :class="generateId(index)" ref="dataValue" width="88%" @mouseover="moveIn($event)" @mouseout="moveOut">
                <br>
                <span class="experttitle" ref="dataValueName">{{expertdata.name}}</span>
            </div>

            <div v-if=show class="flo" :style="{left:left + 'px', top:top + 'px'}">
                <ul class="ulflo" >
                    <li>姓名：{{name}}</li>
                    <li>职称：{{professionalTitle}}</li>
                    <li>专业：{{profession}}</li>
                    <li>机构/公司：{{organization}}</li>
                    <li>研究领域：{{research}}</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    import expertDatabases from '~/assets/expert/expertDatabase.json'


    export default {
        name: 'expertInformation',
        components: {},
        data () {
            return {
                expertDatabases,
                show:false,
                left:0,
                top:0,
                name:null,
                professionalTitle:null,
                profession:null,
                organization:null,
                research:null,
                searchData:'请输入 姓名 公司 研究领域'
            }
        },

        methods: {
            moveIn: function(event){
                // console.log(event.toElement.id)
                // console.log(this.$refs.dataValue.id[0]);
                // console.log(event.layerX);
                // console.log(event.layerY);

                var num = event.toElement.id;
                if(event.target.nodeName == 'IMG'){
                    this.show = !this.show;
                    this.left = event.layerX + 25;
                    this.top = event.layerY + 25;
                    this.name = this.expertDatabases[num].name;
                    this.professionalTitle = this.expertDatabases[num].professionalTitle;
                    this.profession = this.expertDatabases[num].profession;
                    this.organization = this.expertDatabases[num].organization +"  " + this.expertDatabases[num].institute ;
                    this.research = this.expertDatabases[num].resarchFields;
                }
            },

            moveOut:function(){
                if(event.target.nodeName == 'IMG'){
                    this.show = !this.show;
                }
            },

            mouseEvent(name,type) {
                // console.log(name);
                // console.log(type);
                if(name == this.searchData){
                    if(type == 'focus'){
                        if (this.searchData == '请输入 姓名 公司 研究领域' ){
                            this.searchData = "";
                            this.$refs.searchInp.style.color = "#000";
                        }
                    }
                    if(type == 'blur'){
                        if(this.searchData == ""){
                            this.searchData = '请输入 姓名 公司 研究领域';
                            this.$refs.searchInp.style.color = "#999";
                        }
                    }
                }
            },
            generateId (index){
                return 'name' + index;
            },

            searchButton(){
                //添加搜索事件
                console.log(this.$refs.dataValueName);
                var arrSpan = this.$refs.dataValueName;
                // console.log(arrSpan[0].innerText);
                var arrName = [];
                for (var i = 0;i< arrSpan.length;i++){
                    arrName.push(arrSpan[i].innerText);
                }
                // console.log(arrName);
                var eleId = arrName.indexOf(this.searchData);
                console.log(eleId);
                // console.log(arrSpan[eleId]);
                var id = 'name' + eleId;
                // console.log(document.getElementById(id));
                var ele = document.getElementsByClassName(id);
                // console.log(ele);
                ele[0].scrollIntoView();
                // console.log(ele[0]);
                // ele[0].style = {
                //     display: "inline-block",
                //     borderColor : "red"
                // };

                // //修改元素样式失败，标记
                // ele[0].style.display = 'inline-block';
                // ele[0].style.borderWidth = '2px';
                // ele[0].style.backgroundColor = '#f00';
            }
        },
        created () {
        }
    }


</script>
<style scoped>

    #expert{
        width:100%;
        height: 850px;
        margin:0px auto;
        padding:0 20px;
        box-sizing:border-box;
        display:flex;
        flex-wrap:wrap;
        overflow: auto;
    }

    .person {
        flex-grow:1;
        flex-basis:200px;
        margin:5px;
        padding:5px;
        text-align:center;
    }

    .experttitle{
        font-family: Arial;
        font-weight: bold;
        font-size: 14px;
        color: #f7f8fb;
    }

    .flo{
        background-color:rgba(45,140,240,0.5) ;
        padding: 5px;
        position: absolute;
        width: 400px;
        /*height:600px;*/
        color: #ffffff;
        font-size:20px;
        display: inline-block;
        border-radius: 5%;
    }
    .ulflo{
        list-style: none;
    }
    .ulflo li{
        color: #000;
        background-color: rgba(160, 200, 240, 0.9);
        margin: 5px 0;
        border-radius: 10%;
        padding: 0 5px;
    }
    .search{
        margin:0 auto;
        padding-left: 40px;

    }
    .search span{
        color: #ffffff;
        height: 20px;
        font-size: 16px;
        line-height: 20px;

    }
    .search span input{
        margin: 0;
        height: 20px;
        width: 300px;
        font-size: 12px;
        vertical-align: bottom;
        color:#999

    }
    .search span button{
        margin: 0 10px;
        padding: 0;
        height: 20px;
        line-height: 20px;
        width: 60px;
        font-size: 14px;
        vertical-align: bottom;
        color:#000;
    }


</style>