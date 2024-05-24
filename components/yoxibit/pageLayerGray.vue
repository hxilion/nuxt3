<template>
	<div class="layer-white">
		<div class="max-w-screen-xl mx-auto px-4 py-20">
			<slot>
				<router-view />
			</slot>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.layer-white {
	width: 100%;
	height: auto;
	background-color: #F8F8F8;
	margin-left: auto;
	margin-right: auto;
  font-family: Murecho;
}
</style>