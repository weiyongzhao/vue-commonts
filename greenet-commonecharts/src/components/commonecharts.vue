<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/index";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      chart: null,

    };
  },
  watch: {
    // options(val) {
    //   console.log(val)
    //   this.chart = echarts.init(document.getElementById(this.id));
    //   this.chart.setOption(val);
    // },
    options: {
      
      handler(newval, oldval) {
        console.log(newval, oldval)
        this.chart = echarts.init(document.getElementById(this.id));
        this.chart.setOption(newval);
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      // immediate: true,
      deep: true
    }
  },
  mounted() {
    this.chart = echarts.init(document.getElementById(this.id));

  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  }
};
</script>
