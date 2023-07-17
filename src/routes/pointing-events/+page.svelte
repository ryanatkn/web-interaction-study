<script lang="ts">
	// TODO BLOCK capture (toggle?)

	interface LogItem {
		type: 'mouse' | 'touch' | 'pointer';
		name: string;
		time: number;
	}

	let items: LogItem[] = [];

	const log = (name: string) => {
		items = items.slice();
		items.unshift({type: 'mouse', name, time: performance.now()});
	};

	// TODO BLOCK add mousemove, but only between a mousedown and mouseup to avoid worthless spam
	const mouse =
		(name: string) =>
		(e: MouseEvent): void => {
			log(name);
			console.log(`e`, e);
		};

	$: item_count = items.length;
	$: start_time = items[item_count - 1]?.time;
</script>

<div class="wrapper">
	<div class="content">
		<ul class="log">
			{#each items as item, i (item)}
				{@const time = item.time - start_time}
				{@const dt = i === item_count - 1 ? time : time - (items[i + 1].time - start_time)}
				<li
					class:mouse={item.type === 'mouse'}
					class:touch={item.type === 'touch'}
					class:pointer={item.type === 'pointer'}
				>
					<div class="name">{item.name}</div>
					<div class="dt">{Math.round(dt)}<small>ms</small></div>
					<div class="time">{Math.round(time)}<small>ms</small></div>
				</li>
			{/each}
		</ul>
		<div
			class="pointing_events"
			role="none"
			on:click={mouse('click')}
			on:dblclick={mouse('dblclick')}
			on:mousedown={mouse('mousedown')}
			on:mouseup={mouse('mouseup')}
		/>
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
		text-align: right;
	}
	li {
		display: flex;
		align-items: center;
	}
	li.mouse {
		color: var(--color_1);
	}
	li.touch {
		color: var(--color_2);
	}
	li.pointer {
		color: var(--color_3);
	}
	.name {
		width: 120px;
	}
	small {
		color: var(--text_3);
	}
	.time {
		width: 80px;
	}
	.dt {
		width: 70px;
		text-align: right;
	}
</style>
