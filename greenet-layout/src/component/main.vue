<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix" v-if="titlename">
      <span class="greenet-title">{{titlename}}</span>
      <slot name="greenetTitle"></slot>
    </div>
    <slot name="greenetContent"></slot>
  </el-card>
</template>

<script>
export default {
  name: "greeenet-layout",
  data() {
    return {};
  },
  props: {
    titlename: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.greenet-title {
  padding-left: 10px;
  border-left: 3px solid #00b4aa;
  color: #00b4aa;
}
</style>
