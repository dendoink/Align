<template>
    <div class="landing_container">
      <div class="landing_outter">
         <div class="landing_main">
         <div class="landing_inner">
            <div class="inner_img">
              <img src="./assets/avatar.png" alt="">
            </div>
            <h1>USER NAME</h1>
            <p>Dreamer & Coder & Writter</p>
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
    select: function() {}
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
    url(assets/landing.jpg);
  background-position: 0% 0%, center;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-attachment: scroll;
  background-color: #ffffff;
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
  height: 100vh;
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
}
.landing_inner p {
  color: #fff;
}
</style>
