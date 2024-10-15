<template>
	<label>
		<input type="checkbox" v-model="isChecked" @change="handleClick" />
		<img :src="image" alt="Favorite" />
		<span>Favorite</span>
	</label>
</template>

<script setup>
import { ref, computed, onMounted, watch, toRef } from "vue";
import heart from "@/assets/heart.svg";
import filledHeart from "@/assets/filled-heart.svg";

const props = defineProps({
	movieId: String,
});

const movieId = toRef(props, "movieId");

const isFavorite = () => {
	const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
	if (favorites) {
		return favorites.includes(movieId.value);
	}
};

const isChecked = ref(isFavorite()); // fazer valor atualizar a cada filme diferente pesquisado
watch(movieId, () => {
	isChecked.value = isFavorite();
});

const image = computed(() => (isChecked.value ? filledHeart : heart));

const handleClick = () => {
	const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
	if (isChecked.value) {
		localStorage.setItem(
			"favorites",
			JSON.stringify([...favorites, movieId.value])
		);
	} else {
		localStorage.setItem(
			"favorites",
			JSON.stringify(favorites.filter((id) => id !== movieId.value))
		);
	}
};

onMounted(() => isFavorite());
</script>

<style scoped lang="postcss">
label {
	@apply bg-primary-gray text-white px-4 py-2 rounded-md flex items-center gap-2 h-11 w-max;

	input {
		@apply absolute h-0 w-0 opacity-0;
	}

	img {
		@apply h-full fill-white;
	}

	span {
		@apply font-semibold text-favorite-button;
	}
}
</style>
