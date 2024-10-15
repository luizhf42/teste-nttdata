<template>
	<section>
		<div class="movie-info">
			<h2>{{ movieData.Title }}</h2>
			<p class="font-semibold">
				{{ movieData.Year }} | {{ formatRuntime(movieData.Runtime) }} |
				{{ movieData.Rated }}
			</p>
			<p class="genre">{{ movieData.Genre }}</p>
			<p class="actors"><span>Actors:</span> {{ movieData.Actors }}</p>
			<p class="plot">{{ movieData.Plot }}</p>

			<div class="rating-wrapper">
				<img src="@/assets/star.svg" alt="" />
				<span>{{ movieData.imdbRating }}</span> / 10
			</div>
			<FavoriteButton :movieId="movieData.imdbID" />
		</div>
		<img class="poster" :src="movieData.Poster" alt="" />
	</section>
</template>

<script setup>
import FavoriteButton from "@/components/FavoriteButton.vue";

const { movieData } = defineProps({
	movieData: Object,
});

const formatRuntime = (runtime) => {
	const runtimeInMinutes = runtime.split(" ")[0];
	const hours = Math.floor(runtimeInMinutes / 60);
	const minutes = runtimeInMinutes % 60;
	return `${hours}h ${minutes}m`;
};
</script>

<style scoped lang="postcss">
section {
	@apply flex flex-col-reverse md:flex-row p-7 gap-4 text-lg;

	.movie-info {
		@apply flex flex-col md:w-3/5;

		h2 {
			@apply font-bold text-3xl;
		}

		.genre {
			@apply italic;
		}

		.actors {
			@apply my-2;

			span {
				@apply font-semibold;
			}
		}

		.plot {
			@apply text-justify mb-2;
		}

		.rating-wrapper {
			@apply flex items-center gap-1 mb-3;

			img {
				@apply h-6 aspect-square;
			}

			span {
				@apply font-semibold text-[1.25rem];
			}
		}
	}

	.poster {
		@apply max-w-72 w-11/12 h-auto ml-auto mr-auto md:mr-0 rounded-md shadow-lg border-2 border-primary-gray;
	}
}
</style>
