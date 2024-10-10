<template>
	<header>
		<img src="@/assets/movie-search-icon.svg" alt="" />
		<h1>Movie Search</h1>
	</header>
</template>

<script setup></script>

<style scoped lang="postcss">
header {
	@apply bg-header h-16 w-full flex items-center justify-center gap-4;

	img {
		@apply h-4/5 aspect-square fill-white;
	}

	h1 {
		@apply hidden xs:block text-3xl font-bold text-center;
	}
}
</style>
