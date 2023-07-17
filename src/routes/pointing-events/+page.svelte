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

<div class="wrapper">
	<div class="content">
		<ul class="log">
			{#each items as item (item)}
				<li>
					<div class="name">{item.name}</div>
					<div>{Math.round(item.time - start_time)}<small>ms</small></div>
				</li>
			{/each}
		</ul>
		<div class="pointing_events" role="none" on:click={mouse('click')} />
	</div>
	<div class="scrollable">
		<button on:click={() => (items = [])}>clear</button>
	</div>
</div>

<style>
	.wrapper {
		position: fixed;
		inset: 0;
		display: flex;
	}
	.content {
		position: relative;
		flex: 1;
		height: 100%;
	}
	.pointing_events {
		position: absolute;
		inset: 0;
	}
	.scrollable {
		width: 80px;
		height: 100%;
		background-color: var(--fg_1);
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.log {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
	}
	li {
		display: flex;
		align-items: center;
	}
	.name {
		width: 80px;
	}
	small {
		color: var(--text_3);
	}
</style>
