<template>
  <div class="register py-40 font-medium" >
    <NuxtImg src="/assets/img/backstage/desktop.png" />
    <Form id="registerForm" @submit="add" ref="myForm">
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
        <label class="text-white" for="password">密碼 : </label>
        <Field
          v-model="form.password"
          name="password"
          type="password"
          class="outline h-10 ml-2 px-5 rounded-lg"
          placeholder="請輸入密碼"
          :rules="validatePassword"
        />
      </div>
      <div class="msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="password" /></div>
      <div class="pt-10">
        <label class="text-white" for="passwordConform">密碼確認 : </label>
        <Field
          v-model="form.passwordConform"
          name="passwordConform"
          type="password"
          class="outline h-10 ml-2 mr-7 px-5 rounded-lg"
          placeholder="再次輸入密碼"
          :rules="validatePassword"
        />
      </div>
      <div class="msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="passwordConform" /></div>
      <div class="mt-20">
        <button type="submit" class="btn rounded-lg">新增</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { errorMessages } from 'vue/compiler-sfc';

const form = reactive ({
  username: '',
  password: '',
  passwordConform: '',
});
const errors = ref('');
const myForm = ref<HTMLFormElement | null>();
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public

watch(
  () => form.username,
  (username) => {
    if (validateUser(username)) {
      console.log(852, myForm.value);
      console.log(4, JSON.parse(JSON.stringify(myForm.value)));
    }
    // let obj = JSON.stringify(myForm.value, (key, value)=>{
    //   console.log(key);
    //   console.log(value);
    //   // if(key == 'name'){
    //   //   return value+"这是对象的属性值";
    //   // }else{
    //   //   return value;
    //   // }
    // });
    // if (!validateUser(username) && typeof JSON.parse(JSON.stringify(myForm.value)).errors.username !== undefined) {
    //   console.log(7532);
    //   JSON.parse(JSON.stringify(myForm.value)).errors.username = '';
    // }
    console.log(validateUser(username));
    console.log(JSON.parse(JSON.stringify(myForm.value)).errors)
    console.log(JSON.parse(JSON.stringify(myForm.value)).errors.username)
  },
  { deep: true }
)

const add = (values: any, actions: any) => {
  console.log(values);
  console.log(actions);
  if (form.password !== form.passwordConform) {
    errors.value = '密碼不一樣重打吧';
    console.log(errors.value);
  } else {
    // const { data } = useFetch(`${apiBase}/creatUser`, {
    //   query: {form}
    // })
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
