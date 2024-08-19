<template>
  <div class="landing_container">
    <div class="landing_outter">
      <div class="landing_main">
        <div class="landing_inner">
          <div class="inner_img"><img
              src="../assets/avatar.png"
              alt=""
            /></div>
          <h1
            class="tracking-in-expand"
            @click="handleRoute()"
          >
            <div class="arrow arrow_left"></div>{{landing.blogName}}<div class="arrow arrow_right"></div>
          </h1>
          <div
            class="info_tags tracking-in-contract-bck"
            @click="handleRoute()"
          >
            <p class="info_tag">{{landing.tagA}}</p>
            &
            <p class="info_tag">{{landing.tagB}}</p>
            &
            <p class="info_tag">{{landing.tagC}}</p>
          </div>
          <div class="info_icon_group">
            <a :href="landing.github">
              <awesome-icon
                name="brands/github"
                scale='4'
              ></awesome-icon>
            </a>
            <a :href="landing.twitter">
              <awesome-icon
                name="brands/twitter"
                scale='3'
              ></awesome-icon>
            </a>
            <a :href="landing.email">
              <awesome-icon
                name="envelope"
                scale='2'
              ></awesome-icon>
            </a>
            <a :href="landing.linkedIn">
              <awesome-icon name="brands/linkedin"></awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const config = require("../../config/");
export default {
  name: "Landing",
  computed: {
    landing: function() {
      return config.ladingInfo;
    }
  },
  methods: {
    handleRoute: function() {
      this.$router.push("home");
    }
  }
};
</script>

<style scoped>
.landing_container::before {
  content: "";
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
    url(https://ws1.sinaimg.cn/large/88b26e1cgy1fx7bqbh1y7j22b432wx6s.jpg);
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
  width: 25rem;
  height: 25rem;
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
  font-family: "Arial", "sans-serif";
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.175;
  font-weight: 400;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
  transition: opacity 0.5s ease-in-out 0.125s;
  transition-delay: 0.25s;
  color: #fff;
  letter-spacing: 2px;
}
.landing_inner > h1::first-letter {
  color: #dc3545;
}

.landing_inner p {
  color: #fff;
  font-size: 1.2rem;
}
.landing_inner .info_icon_group {
  color: #fff;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  align-items: flex-end;
}
.landing_inner .info_icon_group a {
  color: #ffffff;
}
.landing_inner .info_icon_group a:hover {
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
  font-size: 1.3rem;
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
.tracking-in-expand {
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
    0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
    0 0 100px rgba(255, 255, 255, 0.1);
}
.tracking-in-expand .arrow {
  background: inherit;
  border: 1rem solid #e91e63;
}
.tracking-in-expand .arrow_left {
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  -webkit-animation: shake-left 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both infinite;
  animation: shake-left 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}
.tracking-in-expand .arrow_right {
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-top-color: transparent;
  -webkit-animation: shake-right 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both infinite;
  animation: shake-right 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}
.tracking-in-contract-bck {
  animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .landing_outter .landing_main {
    width: 20rem;
    height: 30rem;
  }
  .landing_main .landing_inner {
    min-height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

@-webkit-keyframes shake-right {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}
@keyframes shake-right {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}

@-webkit-keyframes shake-left {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}
@keyframes shake-left {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}
</style>
