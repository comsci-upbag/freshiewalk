<script>
	import Scanner from './Scanner.svelte';
	import Dock from './Dock.svelte';

	import { page } from '$app/stores';
	import '@fontsource/poppins';

	let user = $page.data.session?.user;
	let name = user?.name;
	let email = user?.email;
	let image = user?.image;

	let counter = 0;
	let numsOfCards = 11;

	const onClaim = () => {
		if (counter < numsOfCards) counter++;
	};
</script>

<svelte:head>
	<title>Freshie Walk</title>
	<meta name="description" content="COMSCI@UP.BAG" />
</svelte:head>

<div class="container">
	<h1 class="title">Freshie Walk</h1>
	<div class="card">
		<div class="info-bar">
			<div class="profile-bar">
				<img src={image} alt="" />
				<div class="profile-info">
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
			<p>{counter}/{numsOfCards}</p>
		</div>

		<Scanner />
	</div>
	<button on:click={onClaim}>Claim</button>
	<Dock />
</div>

<style>
	.container {
		height: calc(100vh - 50px);
		width: 100vw;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 25px;
		margin: auto;
	}

	.container h1 {
		font-family: 'Poppins', sans-serif;
		font-size: x-large;
		font-weight: bold;
	}

	.card {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 360px;
		gap: 0px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.4);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(9px);
		-webkit-backdrop-filter: blur(9px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}

	.info-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 340px;
		padding-top: 15px;
		padding-bottom: 8px;
	}

	.info-bar p {
		color: black;
		font-size: 16px;
		font-family: Poppins;
		font-weight: 500;
		word-wrap: break-word;
	}

	.profile-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.profile-bar img {
		width: 38px;
		height: 38px;
		border-radius: 9px;
	}

	.profile-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		justify-content: center;
		align-items: flex-start;
	}

	.profile-info h2 {
		color: #08282b;
		font-size: 16px;
		font-family: Poppins;
		font-weight: 500;
		word-wrap: break-word;
	}
	.profile-info p {
		color: rgba(0, 0, 0, 0.5);
		font-size: 8px;
		font-family: Poppins;
		font-weight: 500;
		word-wrap: break-word;
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
		border-radius: 20px;
		justify-content: center;
		align-items: center;
		display: inline-flex;
	}
</style>
