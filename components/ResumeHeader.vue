<template>
  <header class="resume-header">
    <section class="title-section">
      <div class="applicant-name">
        <h1>{{ data?.name }}<small class="nickname">{{ data?.nickname }}</small></h1>
      </div>
      <div class="desired-job">
        <h2>{{ data?.job }}<small class="location">{{ data?.location }}</small></h2>
      </div>
    </section>
    <section class="info-section">
      <h2>{{ data?.gender }} / {{ data?.DOB.slice(0, 7) }}</h2>
      <h3>{{ data?.education }} / {{ data?.education_desc }}</h3>
      <h3>{{ data?.college }} · {{ data?.major }}</h3>
    </section>
    <section class="contact-section">
      <ul>
        <li>
          <a :href="`tel:${data?.phone}`" target="_blank">
            <span class="contact-link">{{ data?.phone }}</span>
            <i class="icon icon-phone"></i>
          </a>
        </li>
        <li>
          <a :href="`mailto:${data?.email}`" target="_blank">
            <span class="contact-link">{{ data?.email }}</span>
            <i class="icon icon-mail"></i>
          </a>
        </li>
        <li>
          <a :href="data?.blog" target="_blank">
            <span class="contact-link">{{ data?.blog }}</span>
            <i class="icon icon-home"></i>
          </a>
        </li>
        <li>
          <a :href="`https://github.com/${data?.github}`" target="_blank">
            <span class="contact-link">github.com/{{ data?.github }}</span>
            <i class="icon icon-github"></i>
          </a>
        </li>
      </ul>
    </section>
  </header>
</template>

<script lang="ts" setup>

const { data } = await useAsyncData(() => useDirectusRest<Information>(readItems('information')))

const { headerTime } = useLastUpdated()
headerTime.value = data.value?.last_updated

</script>

<style lang="less" scoped>
@import "@/styles/vars.less";

.resume-header {
  padding: 32px 48px 24px;
  color: #fff;
  background-color: @color-main;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    padding: 24px;
  }

  .title-section {
    margin-bottom: 8px;
    border-bottom: 2px solid darken(@color-main, 2%);
    font-size: 48px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 720px) {
      flex-direction: column;
    }

    .applicant-name {
      .nickname {
        padding-left: 8px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0;

        @media screen and (max-width: 720px) {
          display: block;
          padding-left: 0;
          padding-right: 8px;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 1px;
        }
      }
    }

    .desired-job {
      display: inline;
      font-size: 24px;
      font-weight: 300;

      @media screen and (max-width: 720px) {
        margin: 8px auto 0;
        padding: 16px 4px;
        border-top: 1px solid darken(@color-main, 2%);
      }

      .location {
        padding-left: 8px;
        font-size: 14px;
      }
    }
  }

  .info-section {
    padding: 4px;

    h2 {
      margin: 2px 0;
      font-size: 17px;
      line-height: 32px;
    }

    h3 {
      font-size: 15px;
      line-height: 30px;
    }
  }




  .info-section {
    float: left;

    @media screen and (max-width: 720px) {
      width: 100%;
      text-align: center;
    }
  }

  .contact-section {
    float: right;
    text-align: right;

    @media screen and (max-width: 720px) {
      width: 100%;
      text-align: center;
    }
  }


  .contact-section {
    padding: 4px;

    ul {
      @media screen and (max-width: 720px) {
        margin: 16px 0 0;
        text-align: center;
      }

      >li {
        height: 24px;

        @media screen and (max-width: 720px) {
          display: inline-flex;
        }

        >a {
          display: inline-flex;
          align-items: center;
          font-family: @font-family-title;
          font-size: 14px;
          line-height: 24px;
          color: #fff;

          &:hover {
            color: #e8e8e8;
          }

          .contact-link {
            @media screen and (max-width: 720px) {
              display: none;
            }
          }

          .icon {
            margin-left: 6px;
            vertical-align: middle;

            @media screen and (max-width: 720px) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>