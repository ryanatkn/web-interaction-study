<script lang="ts">
	import {base} from '$app/paths';

	// TODO maybe expand behavior to demonstrate `capture` and handlers that are passive by default

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

	const mouse =
		(name: string) =>
		(_e: MouseEvent): void => {
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
			if (enable_move_events) {
				if (name === 'pointermove' && !pointer_is_down) return;
				if (name === 'pointerdown') pointer_is_down = true;
				if (name === 'pointerup' || name === 'pointercancel') pointer_is_down = false;
			}
			log(name);
		};
	const touch =
		(name: string) =>
		(_e: TouchEvent): void => {
			if (enable_move_events) {
				if (name === 'touchmove' && !touch_is_down) return;
				if (name === 'touchstart') touch_is_down = true;
				if (name === 'touchend' || name === 'touchcancel') touch_is_down = false;
			}
			log(name);
		};

	$: item_count = items.length;
	$: start_time = items[item_count - 1]?.time;

	let enable_move_events = false;
	let enable_mouse_events = true;
	let enable_touch_events = true;
	let enable_pointer_events = true;

	const format_log_text = (text: string): string => {
		const parts = text.split(/\s/gu);
		let formatted = '';
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			switch (i % 3) {
				case 0: {
					formatted += part;
					break;
				}
				case 1: {
					formatted += ' ' + part;
					break;
				}
				case 2: {
					formatted += ' ' + part + '\n';
					break;
				}
			}
		}
		return formatted;
	};

	let log_el: HTMLElement;
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(format_log_text(log_el.innerText));
		} catch (err) {
			alert('failed to copy'); // eslint-disable-line no-alert
		}
	};
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
</script>

<div class="wrapper">
	<div class="content">
		<ul class="log" bind:this={log_el}>
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
		<!-- the `nonpassive` changes behavior for some events on some browsers,
			so we'll include it everywhere, but we probably want to add a toggle
			to revert some or all of them to the default to demonstrate the difference -->
		<div
			class="pointing_events"
			role="none"
			on:click|nonpassive={enable_mouse_events ? mouse('click') : undefined}
			on:dblclick|nonpassive={enable_mouse_events ? mouse('dblclick') : undefined}
			on:mousedown|nonpassive={enable_mouse_events ? mouse('mousedown') : undefined}
			on:mouseup|nonpassive={enable_mouse_events ? mouse('mouseup') : undefined}
			on:mouseenter|nonpassive={enable_mouse_events ? mouse('mouseenter') : undefined}
			on:mouseleave|nonpassive={enable_mouse_events ? mouse('mouseleave') : undefined}
			on:mousemove|nonpassive={enable_mouse_events
				? enable_move_events
					? mouse('mousemove')
					: undefined
				: undefined}
			on:pointerdown|nonpassive={enable_pointer_events ? pointer('pointerdown') : undefined}
			on:pointerup|nonpassive={enable_pointer_events ? pointer('pointerup') : undefined}
			on:pointercancel|nonpassive={enable_pointer_events ? pointer('pointercancel') : undefined}
			on:pointerenter|nonpassive={enable_pointer_events ? pointer('pointerenter') : undefined}
			on:pointerleave|nonpassive={enable_pointer_events ? pointer('pointerleave') : undefined}
			on:pointermove|nonpassive={enable_pointer_events
				? enable_move_events
					? pointer('pointermove')
					: undefined
				: undefined}
			on:touchstart|nonpassive={enable_touch_events ? touch('touchstart') : undefined}
			on:touchend|nonpassive={enable_touch_events ? touch('touchend') : undefined}
			on:touchcancel|nonpassive={enable_touch_events ? touch('touchcancel') : undefined}
			on:touchmove|nonpassive={enable_touch_events
				? enable_move_events
					? touch('touchmove')
					: undefined
				: undefined}
		/>
	</div>
	<div class="scrollable">
		<button on:click={clear}>clear log</button>
		<button on:click={copy}>copy log</button>
		<label><input type="checkbox" bind:checked={enable_move_events} />move events</label>
		<label><input type="checkbox" bind:checked={enable_mouse_events} />mouse events</label>
		<label><input type="checkbox" bind:checked={enable_touch_events} />touch events</label>
		<label><input type="checkbox" bind:checked={enable_pointer_events} />pointer events</label>
		<button on:click={reset}>reset</button>
		<footer class="panel">
			<a
				href="https://github.com/ryanatkn/web-interaction-study/blob/main/src/routes/pointing-events/%2Bpage.svelte"
				>source</a
			>
			<a href="{base}/">home</a>
		</footer>
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
	label {
		padding: var(--spacing_md) 0;
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
	}
	footer {
		margin-top: var(--spacing_lg);
	}
	footer a {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: var(--spacing_xs);
	}
</style>
