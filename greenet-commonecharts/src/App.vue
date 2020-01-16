<template>
  <div id="app">
    <button @click="changedata">数据变化</button>
    <commonecharts id="tenantCnt" width="100%" height="400px" :options="options1"></commonecharts>
  </div>
</template>

<script>
import commonecharts from "./components/commonecharts";
import echarts from "echarts";
export default {
  name: "app",
  components: { commonecharts },
  data() {
    return {
      options1: {}
    };
  },
  mounted() {
    this.dataoption();
  },
  methods: {
    dataoption() {
      var that = this;
      setTimeout(function() {
        console.log(1);
        that.options1 = {
          backgroundColor: "#fff",
          grid: {
            top: "40",
            left: "20",
            right: "57",
            bottom: "30",
            containLabel: true
          },
          yAxis: [
            {
              type: "category",
              data: [name],
              inverse: true,
              axisTick: {
                show: false
              },
              axisLabel: {
                margin: 20,
                textStyle: {
                  fontSize: 18,
                  color: "#00b4aa"
                }
              },
              axisLine: {
                show: false
              }
            }
          ],
          xAxis: [
            {
              type: "value",
              position: "top",
              axisLabel: {
                color: "#00b4aa",
                show: true
              },
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              }
            }
          ],
          series: [
            {
              type: "bar",
              barWidth: 25,
              data: [90],
              label: {
                normal: {
                  show: true,
                  position: "insideBottomRight",
                  formatter: "{c}%",
                  distance: 0,
                  offset: [30, 8],
                  color: "#000",
                  fontSize: 16,
                  padding: [5, 15, 10, 15]
                }
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [
                      {
                        offset: 0,
                        color: "#57eabf" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#2563f9" // 100% 处的颜色
                      }
                    ],
                    false
                  ),
                  barBorderRadius: 14
                }
              }
            },
            {
              type: "bar",
              barWidth: 25,
              xAxisIndex: 0,
              barGap: "-100%",
              data: [100],
              itemStyle: {
                normal: {
                  color: "#ccc",
                  barBorderRadius: 14
                }
              },
              zlevel: -1
            }
          ]
        };
      }, 200);
    },
    changedata() {
      this.options1.series[0].data = [50];
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
