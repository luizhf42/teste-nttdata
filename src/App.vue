<template>
	<Header />
	<main>
		<p>Search for any movie easily!</p>
		<MovieForm @submit-movie="getMovie" />
		<p v-if="loading">loading</p>
		<Movie v-if="movieData && !error" :movieData="movieData" />
		<ErrorMessage v-if="error" />
	</main>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import MovieForm from "@/components/MovieForm.vue";
import Movie from "@/components/Movie.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const loading = ref(false);
const params = new URLSearchParams({
	apikey: import.meta.env.VITE_API_KEY,
	type: "movie",
});

const movieData = ref();
const error = ref(false);

const getMovie = async (movieTitle) => {
	params.set("t", movieTitle);
	loading.value = true;

	try {
		const response = await fetch(
			`https://www.omdbapi.com/?${params.toString()}`
		);
		const data = await response.json();
		checkDataResponse(data);
		error.value = false;
		movieData.value = data;
	} catch (e) {
		error.value = true;
		console.error(e);
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
	@apply w-full max-w-5xl mx-auto p-4;

	p {
		@apply text-center mb-2;
	}
}
</style>
