<template>
  <div class="login py-40 font-medium" >
    <div>
      <img src="/assets/img/backstage/desktop.png" alt="">
    </div>
    <form name="login-from">
      <div class="pt-10">
        <label class="text-white" for="name">帳號 : </label>
        <input
          v-model="username"
          type="username"
          class="outline h-10 ml-5 px-5 rounded-lg"
          minlength="4"
          maxlength="20"
          size="30"
          required
        />
      </div>
      <div class="pt-10">
        <label class="text-white" for="password">密碼 : </label>
        <input
          v-model="password"
          type="password"
          class="outline h-10 ml-5 px-5 rounded-lg"
          minlength="4"
          maxlength="20"
          size="30"
          required
        />
      </div>
      <button type="submit" class="btn rounded-lg mt-20" @click.prevent="getForm">登入</button>
    </form>
    <a href="/register" target="_blank">
      <div class="text-cyan-300 mt-4 text-xs">註冊帳號</div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false
})

const username = ref('');
const password = ref('');
const getForm = () => {
  console.log(username.value);
  console.log(password.value);
}

// const cookie = useCookie('name')
// const setNameCookie = () => {
//   cookie.value = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

</script>

<style>
.login {
  width: 100%;
  height: 734px;
  background: linear-gradient(#a655f7, #902BF5);
  font-family:'M PLUS 2';
  text-align: -webkit-center;
}

.btn {
  width: 120px;
  height: 42px;
  background: linear-gradient(#FFE555, #FFD801);
  text-align: center;
}

.outline {
  outline: none;
}
</style>
