<!-- src/routes/+page.svelte -->
<script>
	import { pingGet, pingPost } from '$lib/test.remote';

	let getResult = '';
	let postResult = '';
	let error = '';

	async function testGet() {
		try {
			getResult = JSON.stringify(await pingGet());
		} catch (e) {
			error = e.message;
		}
	}

	async function testPost() {
		try {
			postResult = JSON.stringify(await pingPost({ ok: true }));
		} catch (e) {
			error = e.message;
		}
	}
</script>

<h1>Remote Functions Bug Repro</h1>

<button on:click={testGet}>Test GET</button>
<p>GET result: {getResult}</p>

<button on:click={testPost}>Test POST</button>
<p>POST result: {postResult}</p>

{#if error}
	<p style="color:red">Error: {error}</p>
{/if}
