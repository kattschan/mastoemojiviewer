<script>
	export let data;
	import { page } from '$app/stores';
	export let form;
	let search;
	let showraw = false;
	function toggleRaw() {
		showraw = !showraw;
	}
</script>

<main class="responsive max">
	{#if form?.json}
		<h3>Emoji on {form.instance}</h3>
		<div class="space"></div>
		<a href="#raw">
			<button on:click={toggleRaw}>Show/Hide Raw</button>
		</a>
		<div class="space"></div>
		<div class="field large prefix round fill">
			<i class="front">search</i>
			<input bind:value={search} />
		</div>
		<div class="grid">
			{#each form.json as emoji}
				{#if search}
					{#if emoji.shortcode.includes(search)}
						<div class="s12 m6 l3">
							<article>
								<div class="row">
									<img class="circle large" src={emoji.url} /><!----><!---->
									<div class="max">
										<p title={emoji.shortcode}>:{emoji.shortcode}:</p>
										{#if emoji.category}
											<p>Category: {emoji.category}</p>
										{:else}
											<p>No category</p>
										{/if}
									</div>
								</div>
							</article>
						</div>
					{/if}
				{:else}
					<div class="s12 m6 l3">
						<article>
							<div class="row">
								<img class="circle large" src={emoji.url} /><!----><!---->
								<div class="max">
									<p title={emoji.shortcode}>:{emoji.shortcode}:</p>
									{#if emoji.category}
										<p>Category: {emoji.category}</p>
									{:else}
										<p>No category</p>
									{/if}
								</div>
							</div>
						</article>
					</div>
				{/if}
			{/each}
		</div>
		<div class="space"></div>
		<a href="#raw">
			<button on:click={toggleRaw}>Show/Hide Raw</button>
		</a>
		{#if showraw}
			<pre id="raw">{JSON.stringify(form.json, null, 2)}</pre>
		{/if}
	{:else}
		<h3>Mastodon Emoji Viewer</h3>
		<p>Enter an instance URL and we'll try to find all of it's custom emoji.</p>
		<div class="round padding border error">
			<p>Viewed emoji could be animated.</p>
		</div>
		<div class="space"></div>
		<form method="POST">
			<div class="field label prefix suffix border round">
				<i>link</i>
				<input type="text" name="instance" />
				<label>Instance URL</label>
			</div>
			<button>View</button>
		</form>
	{/if}
	<footer class="absolute bottom max">
		<p>
			Made with ❤️ | Follow me on <a href="https://wetdry.world/@kat" rel="me" target="_blank"
				>Mastodon</a
			>. Open source on
			<a href="https://github.com/kattschan/mastoemojiviewer" target="_blank">GitHub</a>.
		</p>
	</footer>
</main>
