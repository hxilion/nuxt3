<template>
  <div class="login py-40 font-medium" >
    <div>
      <img src="/assets/img/backstage/desktop.png" alt="">
    </div>
    <form name="login-from" @submit="add" method="post">
      <div class="pt-10">
        <label class="text-white" for="name">帳號 : </label>
        <input
          v-model="username"
          type="username"
          class="outline h-10 ml-5 px-5 rounded-lg"
          minlength="2"
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
      <div class="pt-10">
        <label class="text-white" for="passwordConform">密碼確認 : </label>
        <input
          v-model="passwordConform"
          type="password"
          class="outline h-10 ml-5 mr-7 px-5 rounded-lg"
          minlength="4"
          maxlength="20"
          size="30"
          required
        />
      </div>
      <button type="submit" class="btn rounded-lg ml-5 mt-20">新增</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const passwordConform = ref('');
const errors = ref('');
const add = (e: any) => {
  if (password.value !== passwordConform.value) {
    errors.value = '密碼不一樣重打吧';
    console.log(errors.value);
  } else {
    console.log(username.value);
    console.log(password.value);
  }
  e.preventDefault();
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
