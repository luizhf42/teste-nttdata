<template>
	<Header />
	<main>
		<p>Search for any movie easily!</p>
		<MovieForm/>
	</main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import MovieForm from "@/components/MovieForm.vue";
</script>

<style scoped lang="postcss">
main {
	@apply w-full max-w-lg mx-auto p-4;


	p {
		@apply text-center;
	}
}
</style>
