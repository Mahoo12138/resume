<template>
  <div class="status-bar">
    <a class="status" href="https://github.com/Mahoo12138/resume" target="_blank">
      <i class="icon icon-rss"></i> 简历模版
    </a>
    <p class="last-modified">最后更新时间： 2025 年 04 月</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.status-bar {
  position: absolute;
  top: 32px;
  left: 50%;
  width: 1000px;
  transform: translateX(-50%);
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  animation: fade 1.6s;

  @media screen and (max-width: 1024px) {
    width: auto;
    top: auto;
    bottom: 38px;
    color: #d1d1d1;
    text-align: center;
  }

  .status {
    display: inline-flex;
    align-items: center;
    float: left;
    cursor: pointer;
    color: #bbb;

    @media screen and (max-width: 1024px) {
      float: unset;
      text-align: center;
    }

    .icon {
      margin-right: 4px;
    }
  }

  .last-modified {
    float: right;
    color: #bbb;

    @media screen and (max-width: 1024px) {
      float: unset;
      text-align: center;
    }
  }
}

@media print {

  .status-bar {
    position: absolute;
    z-index: 1;
    width: 1024px;
    top: unset;
    bottom: 24px;
    text-align: left;
    padding: 0 48px;
    color: #d1d1d1;
    font-size: 12px;
    line-height: 24px;

    .last-modified {
      float: left;
    }

    .status {
      display: none;
    }
  }
}
</style>