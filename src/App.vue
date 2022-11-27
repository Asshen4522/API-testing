<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive } from "vue";
</script>

<template>
  <div class="menu">
    <router-link to="/">Users</router-link>
    <router-link to="/posts">Posts</router-link>
  </div>

  <router-view class="field"></router-view>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px 100px 0 100px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 12px 20px 12px 20px;
}
.field {
  margin: 50px 100px 0 100px;
}
</style>
