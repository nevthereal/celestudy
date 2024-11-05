<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	const {
		form: registerForm,
		delayed: registerDelayed,
		enhance: registerEnhanced
	} = superForm(data.registerForm);
</script>

<h1 class="heading-big">Register</h1>

<form use:registerEnhanced action="?/register" class="flex max-w-md flex-col gap-4">
	<div class="input-field">
		<label for="email">Email</label>
		<input type="text" class="input" name="email" />
	</div>
	<div class="input-field">
		<label for="username">Username</label>
		<input type="text" class="input" name="username" />
	</div>
	<div class="input-field">
		<label for="password">Password</label>
		<input type="text" class="input" name="password" />
	</div>
	<div class="input-field">
		<label for="password_confirm">Confirm Password</label>
		<input type="text" class="input" name="password_confirm" />
	</div>
	<button class="rounded-lg bg-amber-400 p-2">Submit</button>
</form>
