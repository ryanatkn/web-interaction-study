<script lang="ts">
	// TODO BLOCK capture (toggle?)

	interface LogItem {
		name: string;
		time: number;
	}

	let items: LogItem[] = [];

	const log = (name: string) => {
		items = items.slice();
		items.unshift({name, time: performance.now()});
	};

	const mouse =
		(name: string) =>
		(e: MouseEvent): void => {
			log(name);
			console.log(`e`, e);
		};

	$: start_time = items[items.length - 1]?.time;
</script>

<div class="pointing_events" role="none" on:click={mouse('click')}>
	<ul class="log">
		{#each items as item (item)}
			<li>
				{item.name} -
				<div>{Math.round(item.time - start_time)}<small>ms</small></div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.pointing_events {
		position: fixed;
		inset: 0;
	}
	.log {
		z-index: 0;
	}
	small {
		color: var(--text_3);
	}
</style>
