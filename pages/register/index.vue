<template>
  <div class="register py-40 font-medium" >
    <NuxtImg
      src="backstage/desktop.png"
    />
    <Form @submit="add" style="width: 728px">
      <div class="pt-10">
        <Field
          name="username"
          :rules="validateUser"
          v-slot="{ handleChange }"
        >
          <label class="text-white" for="name">帳號 : </label>
          <input
            v-model="form.username"
            type="text"
            class="outline h-10 ml-2 px-5 rounded-lg"
            placeholder="請輸入帳號"
            @input="handleChange"
          />
        </Field>
        <div class="msg text-red-600 text-xs font-normal"><ErrorMessage name="username" /></div>
      </div>
      <div class="pt-10">
        <Field
          name="password"
          :rules="validatePassword"
          v-slot="{ handleChange }"
        >
          <label class="text-white" for="password">密碼 : </label>
          <input
            v-model="form.password"
            type="password"
            class="outline h-10 ml-2 px-5 rounded-lg"
            placeholder="請輸入密碼"
            @input="handleChange"
          />
        </Field>
      </div>
      <div class="msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="password" /></div>
      <div class="pt-10">
        <Field
          name="passwordConform"
          :rules="validateConformPassword"
          v-slot="{ handleChange }"
        >
          <label class="text-white" for="passwordConform">密碼確認 : </label>
          <input
            v-model="form.passwordConform"
            type="password"
            class="outline h-10 ml-2 mr-7 px-5 rounded-lg"
            placeholder="再次輸入密碼"
            @input="handleChange"
          />
        </Field>
      </div>
      <div class="msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="passwordConform" /></div>
      <div class="mt-20">
        <button type="submit" class="btn rounded-lg">新增</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';

definePageMeta({
  layout: false
})

const form = reactive ({
  username: '',
  password: '',
  passwordConform: '',
});

const add = async () => {
  const response = await $fetch('/api/createUser', {
    method: 'POST',
    body: { ...form },
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response) {
    navigateTo('/')
  }
}

const validateUser = (value: any) => {
  // if the field is empty
  if (!value) {
    return '帳號必填';
  }
  // if the field is not a valid email
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{2,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入2-20字元，需英文+數字';
  }
  // All is good
  return true;
}

const validatePassword = (value:any) => {
  // if the field is empty
  if (!value) {
    return '密碼必填';
  }
  // if the field is not a valid email
  const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*_-]{4,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入4-20字元，需英文+數字';
  }
  // All is good
  return true;
}

const validateConformPassword = () => {
  if (form.password !== form.passwordConform) {
    return '密碼不一樣重打吧';
  }

  return true;
}

</script>

<style>
.register {
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

.msg {
  width: 220px;
  margin-left: 70px;
  text-align: left;
}

label::after {
  content: "*";
  color: rgb(220 38 38);
  font-size: 14px;
}
</style>
