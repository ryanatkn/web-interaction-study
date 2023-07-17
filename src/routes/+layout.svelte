<script lang="ts">
	import '@feltjs/felt-ui/style.css';
	import '@feltjs/felt-ui/theme.css';
	import '$routes/style.css';

	import Themed from '@feltjs/felt-ui/Themed.svelte';
</script>

<svelte:head>
	<title>web interaction study</title>
</svelte:head>

<Themed>
	<slot />
</Themed>
