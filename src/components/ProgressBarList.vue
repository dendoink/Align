<template>
  <div class="progress_bar_list_container">
    <div
      class="progress_bar"
      v-for="skill in skills"
      :key="skill.label"
    >
      <label class="progress_bar_label">{{skill.label}}</label>
      <div class="progress">
        <div
          class="bar"
          :style="{width: skill.percentage}"
        >
          <span>{{skill.percentage}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const config = require("../../config/");
export default {
  // 主页
  name: "ProgressBarList",
  data() {
    return {
      skills: config.userInfo.skills
    };
  },
  methods: {
    handlePostLink: function(index, dir = "post") {}
  },
  created() {}
};
</script>

<style scoped>
.progress_bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.progress_bar .progress_bar_label {
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
}
.progress {
  display: flex;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  height: 2px;
  margin-bottom: 30px;
  background-color: #ddd;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  width: 90%;
}
.progress .bar {
  transition: width 0.6s ease;
  height: 2px;
  line-height: 8px;
  background-color: #666;
  box-shadow: none;
  position: relative;
  width: 0%;
}
.progress .bar span {
  font-weight: bold;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #9e9e9e;
  border-radius: 50%;
  position: absolute;
  top: -16px;
  right: -20px;
}
</style>
