<template>
	<form
		@submit.prevent="
			formattedMovieTitle.length > 0 ? $emit('submitMovie', formattedMovieTitle) : ''
		"
	>
		<label for="movie-input">Movie Title:</label>
		<div class="input-wrapper">
			<input type="text" id="movie-input" v-model="movieTitle" />
			<button :disabled="formattedMovieTitle.length === 0">
				<img src="@/assets/search-icon.svg" alt="Search" />
			</button>
		</div>
	</form>
</template>

<script setup>
import { computed, ref } from "vue";

const movieTitle = ref("");
const formattedMovieTitle = computed(() => movieTitle.value.trim());
</script>

<style scoped lang="postcss">
form {
	@apply flex flex-col mx-auto max-w-lg;

	label {
		@apply font-bold;
	}

	.input-wrapper {
		@apply flex h-10 w-full drop-shadow-md;

		input {
			@apply h-full w-full p-2 rounded-l-md text-primary-gray focus-visible:search-outline text-lg;

			&:focus-visible ~ button {
				@apply search-outline;
			}
		}

		button {
			@apply h-full w-16 bg-primary-gray rounded-r-md disabled:bg-gray-500;

			img {
				@apply h-4/6 aspect-square fill-white inline-flex;
			}
		}
	}
}
</style>
