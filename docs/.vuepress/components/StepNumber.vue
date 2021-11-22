<template>
  <div>
    <el-button @click="add(-1)">-</el-button>
    <input style="width:80px" type="text" disabled v-model="v_step" border />
    <el-button @click="add(1)">+</el-button>
  </div>
</template>

<script>
export default {
  props: {
    step: Number,
  },
  model: {
    prop: "step",
    event: "update",
  },
  data() {
    return {
      v_step: this.step,
    };
  },
  methods: {
    add(num) {
      console.log(num, this.step);
      this.v_step += num;
      this.$emit("update", this.v_step);
    },
  },
};
</script>

<style></style>
