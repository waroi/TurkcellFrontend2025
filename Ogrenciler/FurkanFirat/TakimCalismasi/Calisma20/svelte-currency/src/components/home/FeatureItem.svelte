<script>
	let props = $props();
</script>

<div class="feature">
	<div class="feature-icon">{props.icon}</div>
	<div class="feature-text">{props.text}</div>
</div>

<style>
	.feature {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.feature-icon {
		font-size: 2rem;
		background: linear-gradient(135deg, #3498db, #2c3e50);
		color: white;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 10px rgba(52, 152, 219, 0.2);
	}

	.feature-text {
		font-weight: 600;
		color: #3d4852;
	}
</style>
