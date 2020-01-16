<template>
  <div>
    <Main :titlename="initData">
      <template v-slot:greenetTitle>
        <button style="float:right">aaa</button>
      </template>
      <template v-slot:greenetContent>
        <div style="height:400px">bbb</div>
      </template>
    </Main>
  </div>
</template>

<script>
import Main from "./component/main";
export default {
  data() {
    return {
      initData: "hello 你好"
    };
  },
  components: {
    Main
  }
};
</script>

<style>
</style>
