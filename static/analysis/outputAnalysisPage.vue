<template>
  <!--<div id="middleCenterDiv" style="height: 100%;width: 100%;">-->
    <!--<iframe frameborder="0" scrolling="no" src="html/hlj-map.html" style="width: 100%; height: 100%;"></iframe>-->
  <!--</div>-->
  <div style="width: 100%;height: 100%;z-index: 999;">
    <div style="width: 100%; height: 100%;display: flex;justify-content: center;align-content: center;">
      <div style="flex: 10;display: flex;flex-direction: column;height: 800px;z-index: 3">
        <div style="flex: 1;background-color: #dbe1ec;filter:alpha(Opacity=100);-moz-opacity:1;opacity: 0.9;">
          <iframe frameborder="0" scrolling="no" src="/html/left-top.html" style="width: 100%; height: 100%;"></iframe>
        </div>
        <div style="flex: 1;background-color: #dbe1ec;filter:alpha(Opacity=60);-moz-opacity:1;opacity: 0.9;margin-top: 2px;">
          <iframe frameborder="0" scrolling="no" src="/html/left-bottom3.html" style="width: 100%; height: 100%;"></iframe>
        </div>
      </div>
      <div style="flex: 10;height: 1px;" id="middleCenterDiv">

      </div>
      <div style="flex: 10;display: flex;flex-direction: column;height: 800px;z-index: 2;">
        <div style="flex: 1;background-color: #dbe1ec;filter:alpha(Opacity=60);-moz-opacity:1;opacity: 0.9;">
          <iframe frameborder="0" scrolling="no" src="/html/left-bottom2.html" style="width: 100%; height: 100%;"></iframe>
        </div>
        <div style="flex: 1;background-color: #dbe1ec;filter:alpha(Opacity=60);-moz-opacity:1;opacity: 0.9;margin-top: 2px;">
          <iframe frameborder="0" scrolling="no" src="/html/right-bottom.html" style="width: 100%; height: 100%;"></iframe>
        </div>
      </div>
    </div>
    <div style="position: relative;width: 100%;height: 100%;top: 0;left:0;z-index: 1">
      <iframe frameborder="0" scrolling="no" src="/html/hlj-map.html" style="width: 100%; height: 100%;"></iframe>
    </div>
  </div>

</template>
<script>
  import $ from 'jquery'
  export default {
    header: {
      title: '智能设计效果'
    },
    name: 'output-analysis-page',
    mounted () {
      // $('#middleCenterDiv').load('html/hlj-map.html')
    }
  }
</script>
<style>
</style>