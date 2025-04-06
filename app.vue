<template>
  <StatusBar />
  <div id="resume-content">
    <ResumeHeader />
    <ResumeContent />
  </div>
  <Footer />
</template>

<script>

</script>

<style lang="less">
@import './styles/index.less';

#resume-content {
  position: relative;
  width: 1024px;
  margin: 64px auto 32px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 16px #c0c0c0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  transform: translate3d(0, 48px, 0);
  animation: fadeUp 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translate3d(0, 48px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    border-radius: 0;
  }
}

@media print {
  #resume-content {
    margin: 0 auto;
    border-radius: 0;
    box-shadow: none;
    padding-bottom: 32px;
  }
}
</style>
