<template>
  <div style="margin-bottom: 20px">
    <ACButton color="blue">主要按钮</ACButton>
    <ACButton color="green">绿色按钮</ACButton>
    <ACButton color="gray">灰色按钮</ACButton>
    <ACButton color="yellow">黄色按钮</ACButton>
    <ACButton color="red">红色按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" plain>朴素按钮</ACButton>
    <ACButton color="green" plain>绿色按钮</ACButton>
    <ACButton color="gray" plain>灰色按钮</ACButton>
    <ACButton color="yellow" plain>黄色按钮</ACButton>
    <ACButton color="red" plain>红色按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton size="small" plain>小按钮</ACButton>
    <ACButton size="medium" plain>中按钮</ACButton>
    <ACButton size="large" plain>大按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" round plain icon="search">搜索按钮</ACButton>
    <ACButton color="green" round plain icon="edit">编辑按钮</ACButton>
    <ACButton color="gray" round plain icon="check">成功按钮</ACButton>
    <ACButton color="yellow" round plain icon="message">提示按钮</ACButton>
    <ACButton color="red" round plain icon="delete">删除按钮</ACButton>
  </div>
  <div style="margin-bottom: 20px">
    <ACButton color="blue" round plain icon="search"></ACButton>
    <ACButton color="green" round plain icon="edit"></ACButton>
    <ACButton color="gray" round plain icon="check"></ACButton>
    <ACButton color="yellow" round plain icon="message"></ACButton>
    <ACButton color="red" round plain icon="delete"></ACButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonDemo",
});
</script>
<style scoped></style>
