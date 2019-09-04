<!--这是案例库界面-->
<template>
    <div class="cass">
        <div class="search">
            <span display = "inline-block" >您想找：<input ref="searchInp" @focus="mouseEvent(searchData,'focus')"  @blur="mouseEvent(searchData,'blur')"
                                                       type="text" v-model="searchData">
            </span>
            <span> <button @click="searchButton" >搜索</button></span>
        </div>

        <br height="5px">

        <div id="expert" >
            <div  v-for="(casedata,index) in caseDatabases"  class="person">
                <img  :src="photo[index].photoPath"  alt=""
                      :id="index" :class="generateId(index)" ref="dataValue" width="88%" @mouseover="moveIn($event)" @mouseout="moveOut">
                <br>
                <span class="experttitle" ref="dataValueName">{{casedata.name}}</span>
            </div>

            <div v-if=show class="flo" :style="{left:left + 'px', top:top + 'px'}">
                <ul class="ulflo" >
                    <li>案例名称：{{name}}</li>
                    <li>地址：{{address}}</li>
                    <li>面积：{{area}}</li>
                    <li>时间：{{deadLine}}</li>
                    <li>类型：{{type}}</li>
                    <li>领域：{{fields}}</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    import caseDatabases from '~/assets/case/caseData.json'
    export default {
        name: 'cassData',
        components: {},
        data () {
            return {
                photo: [{"photoPath":require("../../../assets/case/cassImg/image1富平县城市总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image2大荔县城市总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image3玉田县城市总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image4围场县城乡总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image5隆化县城乡总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image6双城经济开发区总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image7商都县七台镇总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image8红沙岗能源化工建材工业园区.png")},{"photoPath":require("../../../assets/case/cassImg/image9吉林大学前卫南区总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image10乌兰察布机场临空产业园区总体规划.png")},{"photoPath":require("../../../assets/case/cassImg/image11粤桂合作特别试验区发展战略规划.png")},{"photoPath":require("../../../assets/case/cassImg/image12闽粤经济合作发展规划.png")},{"photoPath":require("../../../assets/case/cassImg/image13粤桂产业合作示范区发展规划.png")},{"photoPath":require("../../../assets/case/cassImg/image14承德高新技术产业开发区发展战略研究.png")},{"photoPath":require("../../../assets/case/cassImg/image15双城现代农业综合体建设规划.png")},{"photoPath":require("../../../assets/case/cassImg/image16江南片区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image17大荔县中心城区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image18梧州工业新城控制性详细规划修编.png")},{"photoPath":require("../../../assets/case/cassImg/image19江北片区（广西片）控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image20徐州市汉王镇控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image21玉田县中心城区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image22荣华化工产业园区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image23吉木乃经济合作区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image24老君山景区黎明片区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image25泸沽湖景区落水片区控制性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image26铜山国家现代农业示范区修建性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image27义马香山市场改造项目修建性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image28渭南职业技术学院修建性详细规划设计.png")},{"photoPath":require("../../../assets/case/cassImg/image29大连东山居住小区修建性详细规划设计.png")},{"photoPath":require("../../../assets/case/cassImg/image30回龙窝历史文化街区修建性详细规划.png")},{"photoPath":require("../../../assets/case/cassImg/image31哈尔滨临空经济综合试验区.png")},{"photoPath":require("../../../assets/case/cassImg/image32南岗产业园区发展规划.png")},{"photoPath":require("../../../assets/case/cassImg/image33萨尔图区第三产业发展规划.png")},{"photoPath":require("../../../assets/case/cassImg/image34北戴河新区国家健康产业概念规划.png")},{"photoPath":require("../../../assets/case/cassImg/image35涿州农业科技城.png")},{"photoPath":require("../../../assets/case/cassImg/image36马尼拉码头城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image37东京中央区银座滨水区设计.png")},{"photoPath":require("../../../assets/case/cassImg/image38胡志明市新城规划.png")},{"photoPath":require("../../../assets/case/cassImg/image39成都南区新核心区城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image40天津陈塘科技园城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image41成都武侯祠城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image42无锡SPG居住区城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image43乌兰察布市察右前区城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image44渭南中心步行街城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image45泉州东海滩涂城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image46潘安湖湿地公园概念规划设计.png")},{"photoPath":require("../../../assets/case/cassImg/image47凤凰山生态城市设计.png")},{"photoPath":require("../../../assets/case/cassImg/image48梅溪湖民俗文化及休闲养生园规划.png")},{"photoPath":require("../../../assets/case/cassImg/image49苪城县北公园景观设计.png")},{"photoPath":require("../../../assets/case/cassImg/image50中卫商贸中心建筑设计.png")},{"photoPath":require("../../../assets/case/cassImg/image51中科院信息化大厦建筑设计.png")},{"photoPath":require("../../../assets/case/cassImg/image52广州天河居住区建筑设计.png")},{"photoPath":require("../../../assets/case/cassImg/image53淄博海关办公楼建筑设计.png")},{"photoPath":require("../../../assets/case/cassImg/image54西郑高铁渭南站概念设计.png")},{"photoPath":require("../../../assets/case/cassImg/image55三亚喜来登酒店.png")},{"photoPath":require("../../../assets/case/cassImg/image56中国科学院院士会议中心.png")},{"photoPath":require("../../../assets/case/cassImg/image57杭州大剧院.png")},{"photoPath":require("../../../assets/case/cassImg/image58中宣部对外政务宾馆.png")},{"photoPath":require("../../../assets/case/cassImg/image59台中塔概念设计.png")}],
                caseDatabases,
                show:false,
                left:0,
                top:0,
                name:null,
                address:null,
                area:null,
                deadLine:null,
                type:null,
                fields:null,
                research:null,
                searchData:'请输入 项目名称 类型 项目领域 其他标签'
            }
        },

        methods: {
            moveIn: function(event){
                // console.log(event);
                // console.log(event.toElement.id);
                // console.log(this.$refs.dataValue.id[0]);

                var num = event.toElement.id;
                // console.log(event.layerX);
                // console.log(event.layerY);
                this.show = !this.show;
                this.left = event.layerX + 25;
                this.top = event.layerY +25;
                this.name = this.caseDatabases[num].name;
                this.address = this.caseDatabases[num].address;
                this.area = this.caseDatabases[num].area;
                this.deadLine = this.caseDatabases[num].deadLine;
                this.type = this.caseDatabases[num].type;
                this.fields = this.caseDatabases[num].fields;
                event.cancelBubble = true;
                // console.log(event.relatedTarget.className);
            },
            moveOut:function(){
                // console.log(event.relatedTarget.className);
                // console.log(event);
                this.show = !this.show;
                //这里有个闪缩的bug没有解决
                // if(event.relatedTarget.className == 'flo'){
                //   this.show = this.show;}else{}
            },
            mouseEvent(name,type) {
                // console.log(name);
                // console.log(type);
                if(name == this.searchData){
                    if(type == 'focus'){
                        if (this.searchData == '请输入 项目名称 类型 项目领域 其他标签' ){
                            this.searchData = "";
                            this.$refs.searchInp.style.color = "#000";
                        }
                    }
                    if(type == 'blur'){
                        if(this.searchData == ""){
                            this.searchData = '请输入 项目名称 类型 项目领域 其他标签';
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
                console.log(ele[0]);
                // ele[0].style = {
                //     display: "inline-block",
                //     borderColor : "red"
                // };

                //修改元素样式失败，以后再做
                // ele[0].style.display = 'inline-block';
                // ele[0].style.borderWidth = '2px';
                // ele[0].style.backgroundColor = '#f00';
            }
        },
        created () {
        },
        computed:{

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
        flex-basis:350px;
        margin:5px;
        padding:5px;
        text-align:center;
    }
    .person img{
        height: 300px;

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