<script>
	import temp from '$lib/images/temp.png';

	const fetchCards = async () => {
		return [temp, temp, temp, temp];
	};
</script>

<button class="container">
	<h1>Cards Collected</h1>
	<div class="cards">
		<div>
			{#await fetchCards()}
				<p>Loading...</p>
			{:then cards}
				{#each cards as item}
					<div class="card" style="background-image: url({item});" />
				{/each}
			{:catch}
				<p>Loading failed.</p>
			{/await}
		</div>
	</div>
</button>

<style>
	.container {
		transition: all 0.5s;
		width: 360px;
		height: 400px;
		position: absolute;
		top: calc(100% - 50px);
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 0px;
		background: rgba(255, 255, 255, 0.6);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(13px);
		-webkit-backdrop-filter: blur(9px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}

	.container h1 {
		color: rgba(0, 0, 0, 0.5);
		font-size: 16px;
		font-family: Poppins;
		font-weight: 700;
		word-wrap: break-word;
		padding-top: 13.5px;
		padding-bottom: 13.5px;
		padding-left: 49px;
		padding-right: 48px;
	}

	.container:hover {
		top: calc(100vh - 380px);
	}

	.cards {
		width: 300px;
		overflow: hidden;
		padding-bottom: 13.5px;
	}

	.cards > div {
		display: flex;

		overflow-x: auto;
		scroll-snap-type: x mandatory;

		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
	}

	.cards > div::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	.cards > div::-webkit-scrollbar-thumb {
		background: black;
		border-radius: 10px;
	}
	.cards > div::-webkit-scrollbar-track {
		background: transparent;
	}

	.card {
		scroll-snap-align: start;
		flex-shrink: 0;
		width: 300px;
		height: 300px;
		margin-right: 50px;
		border-radius: 10px;
		background: #eee;
		background-size: cover;
		transform-origin: center center;
		transform: scale(1);
		transition: transform 0.5s;
		position: relative;
	}
</style>
