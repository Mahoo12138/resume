<template>
    <footer id="resume-footer">
      <a
        class="footer-link"
        href="https://github.com/mahoo12138/resume"
        target="_blank">
        <i class="icon icon-link"></i> github.com/mahoo12138/resume
      </a>
      <a
        class="footer-link"
        href="https://github.com/mahoo12138/resume/blob/master/LICENSE"
        target="_blank">
        License: CC-BY-SA-4.0
      </a>
    </footer>
  <footer id="print-footer">
    <a class="footer-link" href="https://github.com/mahoo12138/resume" target="_blank">
      <i class="icon icon-link"></i> 网页版简历：github.com/mahoo12138/resume
    </a>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
footer {
  text-align: center;
  transition: all 0.2s ease-in-out;
  animation: fade 1.6s;

  .footer-link {
    display: inline;
    color: #d1d1d1;

    .icon {
      width: 13px;
      height: 13px;
      margin-right: 3px;
      vertical-align: -3px;
    }
  }
}

#resume-footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 16px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 48px;
  }
}
#print-footer {
  display: none;
}
@media print {
  footer {
    position: absolute;
    z-index: 1;
    width: 1024px;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    line-height: 24px;
    text-align: right;
    padding: 0 48px;
  }
  #resume-footer {
    display: none;
  }
  #print-footer {
    display: block;
  }
}
</style>