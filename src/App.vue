<template>
	<Header />
	<main>
		<p>Search for any movie easily!</p>
		<MovieForm @submit-movie="getMovie" />
		<p v-if="loading">loading</p>
	</main>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import MovieForm from "@/components/MovieForm.vue";

const params = new URLSearchParams({
	apikey: import.meta.env.VITE_API_KEY,
	type: "movie",
});

const loading = ref(false);

const getMovie = async (movieTitle) => {
	params.set("t", movieTitle);
	loading.value = true;
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?${params.toString()}`
		);
		const data = await response.json();
		checkDataResponse(data);
		console.log(data);
	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
};

const checkDataResponse = (data) => {
	if (data.Response === "False") {
		throw new Error(data.Error);
	}
};
</script>

<style scoped lang="postcss">
main {
	@apply w-full max-w-lg mx-auto p-4;

	p {
		@apply text-center;
	}
}
</style>
