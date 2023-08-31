<script lang="ts">
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';

	let scanning = false;
	let stopScanning = () => void {};

	const startScanning = () => {
		let scanner = new Html5Qrcode('reader');
		scanner
			.start(
				{ facingMode: 'environment' },
				{
					aspectRatio: 1,
					fps: 10,
					qrbox: { width: 250, height: 250 }
				},
				(decodedText, decodedResult) => {
					console.log(`Code matched = ${decodedText}`, decodedResult);
				},
				undefined
			)
			.then(() => {
				scanning = true;
			})
			.catch(() => {
				scanning = false;
			});

		stopScanning = () => {
			scanner?.stop().then(() => {
				scanning = false;
			});
		};
	};

	onMount(startScanning);
</script>

<div class="container">
	<div id="reader">
		{#if !scanning}
			<div class="instructions">
				<h1>Please allow camera permissions to be able to scan QR codes!</h1>
				<p>
					Reset the site settings if you have already denied camera permissions and wish to use this
					app again.
				</p>
			</div>
		{/if}
	</div>
	{#if scanning}
		<button on:click|once={stopScanning}>Stop Scanning</button>
	{:else}
		<button on:click|once={startScanning}>Start Scanning</button>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	#reader {
		width: 100%;
		aspect-ratio: 1;
	}
	.instructions {
		width: 80%;
		height: 80%;
		padding: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.instructions h1 {
		color: black;
		font-size: 16px;
		font-family: Poppins;
		font-weight: 500;
		word-wrap: break-word;
		text-align: center;
	}
	.instructions p {
		color: rgba(0, 0, 0, 0.5);
		font-size: 8px;
		font-family: Poppins;
		font-weight: 500;
		word-wrap: break-word;
		text-align: center;
	}
	button {
		color: rgba(0, 0, 0, 0.5);
		font-size: 16px;
		font-family: Poppins;
		font-weight: 700;
		word-wrap: break-word;
		padding-top: 13.5px;
		padding-bottom: 13.5px;
		padding-left: 49px;
		padding-right: 48px;
		background: rgba(255, 255, 255, 0.5);
		justify-content: center;
		align-items: center;
		display: inline-flex;
	}
</style>
