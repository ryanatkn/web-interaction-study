<script lang="ts">
	// TODO BLOCK capture (toggle?)

	interface LogItem {
		type: 'mouse' | 'touch' | 'pointer';
		name: string;
		time: number;
	}

	let items: LogItem[] = [];

	let mouse_is_down = false;

	const log = (name: string) => {
		items = items.slice();
		items.unshift({type: 'mouse', name, time: performance.now()});
	};

	// TODO BLOCK add mousemove, but only between a mousedown and mouseup to avoid worthless spam
	const mouse =
		(name: string) =>
		(e: MouseEvent): void => {
			console.log(`enable_move_events`, enable_move_events);
			if (enable_move_events) {
				if (name === 'mousemove' && !mouse_is_down) return;
				if (name === 'mousedown') mouse_is_down = true;
				if (name === 'mouseup') mouse_is_down = false;
			}
			log(name);
			console.log(`e`, e);
		};

	$: item_count = items.length;
	$: start_time = items[item_count - 1]?.time;

	let enable_move_events = false;

	const clear = () => {
		items = [];
	};
	const reset = () => {
		clear();
		enable_move_events = false;
	};

	$: console.log(`enable_move_events`, enable_move_events);
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
			on:mousemove={enable_move_events ? mouse('mousemove') : undefined}
		/>
	</div>
	<div class="scrollable">
		<button on:click={clear}>clear log</button>
		<button on:click={reset}>reset all</button>
		<label><input type="checkbox" bind:checked={enable_move_events} />move events</label>
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
		-webkit-user-select: none;
		user-select: none;
		touch-action: none;
	}
	.scrollable {
		width: 120px;
		height: 100%;
		background-color: var(--fg_1);
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	/* hacky */
	.scrollable > :global(label) {
		margin-top: var(--spacing_xl);
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
