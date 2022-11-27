<script setup>
const props = defineProps({
  user: {},
});
</script>

<template>
  <div class="card">
    <div><img class="card_img" :src="props.user.picture" alt="" /></div>
    <div class="card_text">
      {{
        props.user.title +
        " " +
        props.user.firstName +
        " " +
        props.user.lastName
      }}
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  background-color: var(--color-object);
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
}
.card_img {
  border-radius: 20px;
  width: 72px;
  height: 72px;
}
.card_text {
  color: white;
  display: flex;
  align-self: center;
  margin-left: 20px;
}
</style>
