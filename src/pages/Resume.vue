<template>
  <div class="resume_container">
    <div class="section">
      <h3 class="section_header">Profile</h3>
      <h3 class="section_subheader">
        I 'm a <strong>{{userInfo.jobTitle}}</strong> from {{userInfo.location}}. I aim to xxx xxxx xxxx....
      </h3>
      <p> {{userInfo.description}}
      </p>
      <div class="info_list">
        <div class="info_line">
          <div class="info_item">
            <span class="info">Name:</span>{{userInfo.name}}
          </div>
          <div class="info_item">
            <span class="info">Date of birth:</span>{{userInfo.birth}}
          </div>
        </div>
        <div class="info_line">
          <div class="info_item">
            <span class="info">Email:</span>{{userInfo.email}}
          </div>
          <div class="info_item">
            <span class="info">Phone:</span>{{userInfo.phone}}
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h3 class="section_header">Skills</h3>
      <ProgressBarList></ProgressBarList>
    </div>
  </div>
</template>

<script>
const config = require("../../config/");
export default {
  name: "Resume",
  data() {
    return {
      selectedTag: "Git"
    };
  },
  components: {
    ProgressBarList: () => import("../components/ProgressBarList")
  },
  methods: {
    select: function(tag) {}
  },
  computed: {
    userInfo: function() {
      return config.userInfo;
    }
  }
};
</script>

<style scoped>
.resume_container {
  width: 60%;
  font: 400 1rem "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 30px;
  color: #727272;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.2;
  border: 10px solid #fff;
  padding: 5%;
  margin-top: 5rem;
  border-radius: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}
.section {
  margin: 0 0 70px;
  overflow: hidden;
}
.section p {
  text-align: left;
  margin: 0;
  margin-bottom: 30px;
  color: #727272;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.2;
  -webkit-font-smoothing: antialiased;
}
h3 {
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  text-align: left;
}
.section .section_header {
  font-size: 24px;
  text-transform: uppercase;
  color: #333;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  font-weight: 600;
}
.section .section_subheader {
  font-size: 1.8rem;
  line-height: 2em;
  margin-bottom: 30px;
  text-transform: none;
  font-weight: 300;
}
.section .section_subheader strong {
  font-weight: 600;
}
.section .info_list {
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  margin: 1rem 0;
  overflow: auto;
}
.section .info_list .info_line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.info_item .info {
  color: #333;
  font-weight: 600;
  margin-right: 1rem;
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .tag_container {
    flex-direction: column;
    width: 100%;
  }
  .tag_container .tag_page_post_list {
    width: 100%;
  }
  .tag_container .tag_nav {
    height: auto;
    width: 100%;
  }
  .resume_container {
    width: 90%;
    padding: 0%;
  }
  .info_line {
    flex-direction: column;
    align-items: flex-start;
  }
  .section .section_subheader {
    font-size: 1.2rem;
  }
}
</style>
