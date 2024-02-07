<script>
	import { page } from '$app/stores';
	import { emojis } from '$lib/emojis.js';
</script>

<main class="reponsive max padding">
	<h5>Sorry, we're having trouble right now.</h5>
	<p>Is the instance URL valid?</p>

	<pre>{$page.status} {$page.error.message}</pre>
</main>
