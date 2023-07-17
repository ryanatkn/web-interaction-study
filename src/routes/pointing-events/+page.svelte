<script lang="ts">
	// TODO BLOCK capture (toggle?)

	interface LogItem {
		type: 'mouse' | 'touch' | 'pointer';
		name: string;
		time: number;
	}

	let items: LogItem[] = [];

	let mouse_is_down = false;
	let touch_is_down = false;
	let pointer_is_down = false;

	const log = (name: string) => {
		items = items.slice();
		items.unshift({type: 'mouse', name, time: performance.now()});
	};

	// TODO BLOCK add mousemove, but only between a mousedown and mouseup to avoid worthless spam
	const mouse =
		(name: string) =>
		(_e: MouseEvent): void => {
			console.log(`enable_move_events`, enable_move_events);
			if (enable_move_events) {
				if (name === 'mousemove' && !mouse_is_down) return;
				if (name === 'mousedown') mouse_is_down = true;
				if (name === 'mouseup') mouse_is_down = false;
			}
			log(name);
		};
	const pointer =
		(name: string) =>
		(_e: PointerEvent): void => {
			console.log(`enable_move_events`, enable_move_events);
			if (enable_move_events) {
				if (name === 'pointermove' && !pointer_is_down) return;
				if (name === 'pointerdown') pointer_is_down = true;
				if (name === 'pointerup') pointer_is_down = false;
			}
			log(name);
		};
	const touch =
		(name: string) =>
		(_e: TouchEvent): void => {
			console.log(`enable_move_events`, enable_move_events);
			if (enable_move_events) {
				if (name === 'touchmove' && !touch_is_down) return;
				if (name === 'touchdown') touch_is_down = true;
				if (name === 'touchup') touch_is_down = false;
			}
			log(name);
		};

	$: item_count = items.length;
	$: start_time = items[item_count - 1]?.time;

	let enable_move_events = false;
	let enable_mouse_events = true;
	let enable_touch_events = true;
	let enable_pointer_events = true;

	const clear = () => {
		items = [];
	};
	const reset = () => {
		clear();
		enable_move_events = false;
		enable_mouse_events = true;
		enable_touch_events = true;
		enable_pointer_events = true;
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
			on:click={enable_mouse_events ? mouse('click') : undefined}
			on:dblclick={enable_mouse_events ? mouse('dblclick') : undefined}
			on:mousedown={enable_mouse_events ? mouse('mousedown') : undefined}
			on:mouseup={enable_mouse_events ? mouse('mouseup') : undefined}
			on:mouseenter={enable_mouse_events ? mouse('mouseenter') : undefined}
			on:mouseleave={enable_mouse_events ? mouse('mouseleave') : undefined}
			on:mousemove={enable_mouse_events
				? enable_move_events
					? mouse('mousemove')
					: undefined
				: undefined}
			on:pointerdown={enable_pointer_events ? pointer('pointerdown') : undefined}
			on:pointerup={enable_pointer_events ? pointer('pointerup') : undefined}
			on:pointercancel={enable_pointer_events ? pointer('pointercancel') : undefined}
			on:pointerenter={enable_pointer_events ? pointer('pointerenter') : undefined}
			on:pointerleave={enable_pointer_events ? pointer('pointerleave') : undefined}
			on:pointermove={enable_pointer_events
				? enable_move_events
					? pointer('pointermove')
					: undefined
				: undefined}
			on:touchstart={enable_touch_events ? touch('touchstart') : undefined}
			on:touchend={enable_touch_events ? touch('touchend') : undefined}
			on:touchcancel={enable_touch_events ? touch('touchcancel') : undefined}
			on:touchmove={enable_touch_events
				? enable_move_events
					? touch('touchmove')
					: undefined
				: undefined}
		/>
	</div>
	<div class="scrollable">
		<button on:click={clear}>clear log</button>
		<button on:click={reset}>reset all</button>
		<label><input type="checkbox" bind:checked={enable_move_events} />move events</label>
		<label><input type="checkbox" bind:checked={enable_mouse_events} />mouse events</label>
		<label><input type="checkbox" bind:checked={enable_touch_events} />touch events</label>
		<label><input type="checkbox" bind:checked={enable_pointer_events} />pointer events</label>
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
		width: 105px;
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
