<script lang="ts">
	import {base} from '$app/paths';

	//
</script>

<main>
	<section class="prose box">
		<header class="box text_align_center">
			<h1>web interaction study</h1>
			<blockquote class="width_sm">
				a small tool for understanding web interactions as implemented in the wild
			</blockquote>
		</header>
	</section>
	<section>
		<ul>
			<li>
				<a class="study" href="{base}/pointing-events">pointing events</a>
			</li>
		</ul>
	</section>
	<section>
		<p>
			<a href="https://github.com/ryanatkn/web-interaction-study">source on GitHub</a>
		</p>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	section {
		margin-bottom: var(--spacing_xl6);
	}
	.study {
		padding: var(--spacing_xl);
		background: var(--fg_1);
		border-radius: var(--border_radius);
		font-size: var(--size_xl);
	}
</style>
