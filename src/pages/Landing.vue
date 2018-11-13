<template>
 <div class="landing_container">
  <div class="landing_outter">
    <div class="landing_main">
      <div class="landing_inner">
        <div class="inner_img"><img src="../assets/avatar.png" alt="" /></div>
        <h1>Dendoink</h1>
        <div class="info_tags">
          <p class="info_tag">Dreamer</p>
          &
          <p class="info_tag">Coder</p>
          &
          <p class="info_tag">Writter</p>
        </div>
        <div class="info_icon_group">
          <a href="https://github.com/DendiSe7enGitHub"><awesome-icon name="brands/github"></awesome-icon></a>
          <a href="https://twitter.com/DendiDang"><awesome-icon name="brands/twitter"></awesome-icon></a>
          <a href="https://www.linkedin.com/in/%E7%BF%BC%E9%BE%99-%E5%94%90-826235130/"><awesome-icon name="brands/linkedin"></awesome-icon></a>
          <a href="mailto:dendise7en@gmail.com"><awesome-icon name="envelope"></awesome-icon></a>
        </div>
        <div class="to_blog_button">
          <p class="left_line line"></p>
            <p class="to_blog_content" @click="handleRoute()">Vist blog</p>
          <p class="right_line line"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {}
  },
  components: {},
  methods: {
    handleRoute: function() {
      this.$router.push('home')
    }
  }
}
</script>

<style scoped>
.landing_container::before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  transform: scale(1);
  background-image: linear-gradient(
      to top,
      rgba(175, 175, 201, 0.42),
      rgba(175, 175, 201, 0.42)
    ),
    url(../assets/landing.jpg);
  background-position: 0% 0%, center;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-attachment: scroll;
  background-color: #ffffff;
}
.inner_img:hover {
  transition: all 0.5s ease-in-out;
  animation: flip-2-hor-top-bck 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
}
@keyframes flip-2-hor-top-bck {
  0% {
    transform: translateY(0) translateZ(0) rotateX(0);
    transform-origin: 50% 0%;
  }
  100% {
    transform: translateY(-100%) translateZ(-260px) rotateX(180deg);
    transform-origin: 50% 100%;
  }
}
.lading_outter {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 1.5625rem 1.5625rem 1.5625rem 1.5625rem;
}
.landing_main {
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.859);
  border-radius: 0.5rem;
  transition: opacity 1s ease 0s, transform 1s ease 0s;
}
.landing_container .landing_outter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.landing_main .lading_inner {
  position: relative;
  z-index: 1;
  border-radius: inherit;
  padding: 3.125rem 2.5rem;
  max-width: 100%;
  width: 25rem;
}
.landing_inner .inner_img {
  position: relative;
  overflow: hidden;
  max-width: 100%;
  display: block;
  margin-bottom: 1.5rem !important;
  margin-top: 0 !important;
}
.inner_img img {
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  width: 7rem;
  border-radius: 100%;
  transition: all 0.5s ease-in-out;
}
.landing_inner > h1 {
  color: #ffffff;
  font-family: 'Arial', 'sans-serif';
  letter-spacing: -0.075rem;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.175;
  font-weight: 400;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
  transition: opacity 0.5s ease-in-out 0.125s;
  transition-delay: 0.25s;
  color: #fff;
  letter-spacing: 1px;
}
.landing_inner > h1::first-letter {
  color: #dc3545;
}
.to_blog_button .to_blog_content::first-letter {
  color: #dc3545;
}
.landing_inner p {
  color: #fff;
}
.landing_inner .info_icon_group {
  color: #fff;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
.landing_inner .info_icon_group a {
  color: #ffffff;
}
.landing_inner .info_icon_group a:hover{
  color: #dc3545;
}
.info_tag::first-letter {
  color: #dc3545;
}
.landing_inner .info_tags {
  display: flex;
  color: #56fcff;
  cursor: pointer;
}
.landing_inner .info_tag {
  letter-spacing: 1px;
  margin-right: 5px;
  margin-left: 5px;
}
.to_blog_button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.to_blog_button .line {
  width: 30%;
  background: #fff;
  height: 1px;
  transition: all 0.5s ease-in-out;
}
.to_blog_button:hover .line {
  background: #242427;
  transition: all 0.5s ease-in-out;
}
.to_blog_button:hover .to_blog_content {
  color: #dc3545;
  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}
@keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}
</style>
