<template>
	<div class="yoxibit w-full h-auto mx-auto bg-grayF8 font-['Murecho'] flex flex-col">
		<!-- <nav class="bg-white p-4 flex flex-col">
			<div class="account "></div>
			<div class="logo flex justify-center items-center ">
				<img src="assets/img/yoxibit/yoxibit_logo.svg" alt="" width="320px" height="80px">
			</div>
		</nav> -->
		<Nav :isLoggedIn="isLoggedIn"/>
		<div class="max-w-screen-xl mx-auto px-4 py-20 sm:py-10 flex flex-1 items-stretch">
			<slot>
				<router-view @updateLoggedIn="changeLoggedIn"/>
			</slot>
		</div>
		<!-- <footer class="flex flex-col justify-center justify-self-end bg-white">
			<div class="footer flex justify-center">
				<a class="m-8" href="/yoxibit">ホーム</a>
				<a class="m-8" href="/yoxibit/terms">利用規約</a>
				<a class="m-8" href="/yoxibit/contact">お問合せ</a>
			</div>
			<div class="copyright bg-black flex justify-center justify-self-end text-white p-4 tracking-widest">
				copyright © 2024 yoxibit.com
			</div>
		</footer> -->
		<Footer />
	</div>
</template>

<script lang="ts" setup>
import Nav from './nav.vue';
import Footer from './footer.vue';
import { ref } from 'vue';
const isLoggedIn = ref(true);
const changeLoggedIn = (login: boolean) => {
	isLoggedIn.value = login;
}
</script>