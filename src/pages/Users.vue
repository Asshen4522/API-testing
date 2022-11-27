<script setup>
import User from "../components/User.vue";
import { reactive, computed } from "vue";

const information = reactive({
  limit: 10,
  page: 0,
  users: [],
  userPage: null,
});

const requiredUrl = computed(() => {
  let a =
    "https://dummyapi.io/data/v1/user?page=" +
    information.page +
    "&limit=" +
    information.limit;
  return a;
});

const inputText = computed(() => {
  let a = "Текущая страница: " + (information.page + 1);
  return a;
});

function toFirst() {
  if (information.page != 0) {
    information.page = 0;
    makefetch();
  }
}
function toNext() {
  information.page += 1;
  makefetch();
}
function toPrevious() {
  if (information.page != 0) {
    information.page -= 1;
    makefetch();
  }
}
function toGiven() {
  information.page = information.userPage - 1;
  makefetch();
  information.userPage = null;
}
function makefetch() {
  fetch(requiredUrl.value, {
    headers: {
      "app-id": "63822d9c4ca7d924e10213e5",
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      information.users = response.data;
      information.users.concat();
    });
}

makefetch();
</script>

<template>
  <div>
    <div class="cardBlock">
      <div v-for="item in information.users">
        <User :user="item" />
      </div>
    </div>
    <div class="buttons">
      <button @click="toFirst">На первую</button>
      <div class="buttons-second">
        <button @click="toPrevious">Предидущая</button>
        <div class="buttons-selector">
          <input
            type="text"
            :placeholder="inputText"
            v-model="information.userPage"
          />
          <button @click="toGiven">Перейти на конкретную страницу</button>
        </div>
        <button @click="toNext">Следующая</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardBlock {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 30px;
  gap: 30px;
}
.buttons-second {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttons-selector {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
