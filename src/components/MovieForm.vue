<template>
	<form>
		<label for="movie-input">Movie Title:</label>
		<div class="input-wrapper">
			<input type="text" id="movie-input" v-model="movieTitle" />
			<button><img src="@/assets/search-icon.svg" alt="Search" /></button>
		</div>
	</form>
</template>

<script setup>
import { ref } from "vue";

const movieTitle = ref("");
</script>

<style scoped lang="postcss">
form {
	@apply flex flex-col mx-auto;

	label {
		@apply font-bold;
	}

	.input-wrapper {
		@apply flex h-10 w-full drop-shadow-md;

		input {
			@apply h-full w-full p-2 rounded-l-md text-primary-gray focus-visible:search-outline;

			&:focus-visible + button {
				@apply search-outline;
			}
		}

		button {
			@apply h-full w-16 bg-primary-gray rounded-r-md;

			img {
				@apply h-4/6 aspect-square fill-white inline-flex;
			}
		}
	}
}
</style>
