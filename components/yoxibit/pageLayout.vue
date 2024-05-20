<template>
	<div class="yoxibit">
		<div class="max-w-screen-xl mx-auto px-4 py-20">
			<slot>
        <router-view />
      </slot>
		</div>
	</div>
</template>
<style>
.yoxibit {
	width: 100%;
	height: auto;
	background-color: #F8F8F8;
	margin-left: auto;
	margin-right: auto;
}
</style>