<template>
    <!--<div id="middleCenterDiv" style="height: 100%;width: 100%;">-->
    <!--<iframe frameborder="0" scrolling="no" src="html/hlj-map.html" style="width: 100%; height: 100%;"></iframe>-->
    <!--</div>-->
    <div  style="width: 100%;height: auto;z-index: 999; ">
        <div style="width: 100%; height: 100%;display: flex;justify-content: center;align-content: center;">
            <iframe allowTransparency = "true" frameborder="0" scrolling="no" src="/html/03drivingElements.html" style="width: 100%; height: 1000px;"></iframe>
        </div>
    </div>

</template>
<script>
    import $ from 'jquery'
    export default {
        header: {
            title: '智能设计效果'
        },
        name: 'output-analysis-page2',
        mounted () {
            // $('#middleCenterDiv').load('html/hlj-map.html')
        }
    }
</script>
<style>
</style>