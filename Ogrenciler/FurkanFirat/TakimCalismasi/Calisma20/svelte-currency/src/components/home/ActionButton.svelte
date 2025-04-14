<script lang="ts">
	import { fly } from 'svelte/transition';

	interface ActionButtonProps {
		label: string;
		onClick: () => void;
		delayAnimation?: number;
	}
	// export let label = ''; ESKİ KULLANIM
	let props: ActionButtonProps = $props();
</script>

<button
	class="btn"
	onclick={props.onClick}
	in:fly={{ y: 20, duration: 800, delay: props.delayAnimation }}
>
	<span>{props.label}</span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M5 12h14"></path>
		<path d="m12 5 7 7-7 7"></path>
	</svg>
</button>

<style>
	.btn {
		background: linear-gradient(135deg, var(--color-theme-3), var(--color-theme-1));
		color: white;
		font-size: 1.1rem;
		font-weight: 600;
		padding: 0.8rem 2rem;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		transition:
			transform 0.3s,
			box-shadow 0.3s;
		box-shadow: 0 4px 15px rgba(255, 55, 199, 0.3);
	}

	.btn:hover {
		box-shadow: 0 7px 20px rgba(255, 55, 199, 0.7);
	}

	.btn:active {
		transform: translateY(1px);
	}
</style>
