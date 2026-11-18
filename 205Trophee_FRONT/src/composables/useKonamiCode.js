
import { ref, onMounted, onUnmounted } from 'vue';

export function useKonamiCode() {
	const showEasterEgg = ref(false);

	const sequence = [
		'ArrowUp', 'ArrowUp',
		'ArrowDown', 'ArrowDown',
		'ArrowLeft', 'ArrowRight',
		'ArrowLeft', 'ArrowRight',
		'b', 'a'
	];

	let position = 0;

	const handleKeydown = (event) => {
		const key = event.key.length === 1
			? event.key.toLowerCase()
			: event.key;

		if (key === sequence[position]) {
			position++;

			if (position === sequence.length) {
				showEasterEgg.value = true;
				position = 0;
			}
		} else {
			position = key === sequence[0] ? 1 : 0;
		}
	};

	onMounted(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onUnmounted(() => {
		window.removeEventListener('keydown', handleKeydown);
	});

	return {
		showEasterEgg
	};
}