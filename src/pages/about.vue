<template>
  <div class="online-resume-container">
    <svg
      class="hello-word"
      width="100"
      height="100"
      viewBox="0 0 365 365"
    >
      <g id="H-letter">
        <line
          class="H-left-stroke"
          x1="17"
          y1="0"
          x2="17"
          y2="124"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="H-mid-stroke"
          x1="33"
          y1="62"
          x2="68"
          y2="62"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="H-right-stroke"
          x1="84"
          y1="0"
          x2="84"
          y2="124"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
      </g>
      <g id="E-letter">
        <line
          class="E-left-stroke"
          x1="138"
          y1="0"
          x2="138"
          y2="124"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="E-top-stroke"
          x1="154"
          y1="17"
          x2="201"
          y2="17"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="E-mid-stroke"
          x1="154"
          y1="62"
          x2="196"
          y2="62"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="E-bottom-stroke"
          x1="154"
          y1="107"
          x2="201"
          y2="107"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
      </g>
      <g id="L-one-letter">
        <line
          class="L-one-long-stroke"
          x1="17"
          y1="153"
          x2="17"
          y2="277"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="L-one-short-stroke"
          x1="33"
          y1="260"
          x2="77"
          y2="260"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
      </g>
      <g id="L-two-letter">
        <line
          class="L-two-long-stroke"
          x1="104"
          y1="153"
          x2="104"
          y2="277"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
        <line
          class="L-two-short-stroke"
          x1="120"
          y1="260"
          x2="164"
          y2="260"
          stroke="#000"
          fill="none"
          stroke-width="34"
        />
      </g>
      <g id="O-letter">
        <circle
          class="O-stroke"
          cx="231"
          cy="215"
          r="48"
          stroke="#000"
          fill="none"
          stroke-width="31"
        />
      </g>
      <g id="red-dot">
        <line
          x1="325"
          y1="260"
          x2="325"
          y2="260"
          stroke="#FF5851"
          class="red-dot"
        />
      </g>
    </svg>
  </div>
  <!-- <awesome-icon name="brands/github" ></awesome-icon>
    <awesome-icon name="brands/linkedin" ></awesome-icon>
    <awesome-icon name="brands/twitter" ></awesome-icon>
    <awesome-icon name="envelope" ></awesome-icon> -->
</template>

<script>
export default {
  // About
  name: "About",
  data() {
    return {};
  }
};
</script>

<style scoped>
html,
body,
.hello-parent {
  height: 100%;
  width: 100%;
  margin: 0;
}
/* H Animation */
.online-resume-container {
  height: 100vh;
}
.H-left-stroke {
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: H-left-move 20s ease forwards;
}

.H-mid-stroke {
  stroke-dasharray: 37px;
  stroke-dashoffset: 37px;
  animation: H-mid-move 9s ease forwards;
}

.H-right-stroke {
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: H-right-move 13s ease forwards;
}

@keyframes H-left-move {
  0% {
    stroke-dashoffset: 124px;
  }
  5% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes H-mid-move {
  0% {
    stroke-dashoffset: 37px;
  }
  5% {
    stroke-dashoffset: 37px;
  }
  10% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes H-right-move {
  0% {
    stroke-dashoffset: 124px;
  }
  5% {
    stroke-dashoffset: 124px;
  }
  10% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

/* E Animation */

.E-left-stroke {
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: E-left-move 20s ease forwards;
}

.E-top-stroke {
  stroke-dasharray: 47px;
  stroke-dashoffset: 47px;
  animation: E-top-move 10s ease forwards;
}

.E-mid-stroke {
  stroke-dasharray: 42px;
  stroke-dashoffset: 42px;
  animation: E-mid-move 10s ease forwards;
}

.E-bottom-stroke {
  stroke-dasharray: 47px;
  stroke-dashoffset: 47px;
  animation: E-bottom-move 10s ease forwards;
}

@keyframes E-left-move {
  0% {
    stroke-dashoffset: 124px;
  }
  2% {
    stroke-dashoffset: 124px;
  }
  6% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes E-top-move {
  0% {
    stroke-dashoffset: 47px;
  }
  6% {
    stroke-dashoffset: 47px;
  }
  11% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes E-mid-move {
  0% {
    stroke-dashoffset: 42px;
  }
  8% {
    stroke-dashoffset: 42px;
  }
  13% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes E-bottom-move {
  0% {
    stroke-dashoffset: 47px;
  }
  11% {
    stroke-dashoffset: 47px;
  }
  16% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

/* L One Animation */

.L-one-long-stroke {
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: L-one-long-move 20s ease forwards;
}

.L-one-short-stroke {
  stroke-dasharray: 44px;
  stroke-dashoffset: 44px;
  animation: L-one-short-move 10s ease forwards;
}

@keyframes L-one-long-move {
  0% {
    stroke-dashoffset: 124px;
  }
  2% {
    stroke-dashoffset: 124px;
  }
  7% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes L-one-short-move {
  0% {
    stroke-dashoffset: 44px;
  }
  13% {
    stroke-dashoffset: 44px;
  }
  18% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

/* L Two Animation */

.L-two-long-stroke {
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: L-two-long-move 20s ease forwards;
}

.L-two-short-stroke {
  stroke-dasharray: 44px;
  stroke-dashoffset: 44px;
  animation: L-two-short-move 10s ease forwards;
}

@keyframes L-two-long-move {
  0% {
    stroke-dashoffset: 124px;
  }
  3% {
    stroke-dashoffset: 124px;
  }
  8% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

@keyframes L-two-short-move {
  0% {
    stroke-dashoffset: 44px;
  }
  15% {
    stroke-dashoffset: 44px;
  }
  20% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

/* O Animation */

.O-stroke {
  stroke-dasharray: 302px;
  stroke-dashoffset: 302px;
  animation: O-move 20s ease forwards;
}

@keyframes O-move {
  0% {
    stroke-dashoffset: 302px;
  }
  4% {
    stroke-dashoffset: 302px;
  }
  9% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

/* Red Dot Animation */

.red-dot {
  stroke-width: 44px;
  stroke-linecap: round;
  animation: red-dot-grow 8s ease-out forwards;
}

@keyframes red-dot-grow {
  0% {
    stroke-width: 0px;
  }
  15% {
    stroke-width: 0px;
  }
  20% {
    stroke-width: 44px;
  }
  100% {
    stroke-width: 44px;
  }
}
</style>
