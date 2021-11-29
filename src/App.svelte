<script>
	import { Api } from "./gen/api";
	import ajv from "ajv";
	import openapi from "./openapi.json";

	const api = new Api();
	const schema = ajv({ schemas: openapi.components.schemas, allErrors: true });

	let result = null;
	let user = { name: "ab", age: 17 };

	async function createUser() {
		let response = await api.post.createUser(user);
		result = response.data.json;
	}

	let ok;
	let validationErrors;
	$: {
		ok = schema.validate("CreateUserRequest", user);
		validationErrors = schema.errors;
	}
</script>

<div>
	<label>Name:<input bind:value={user.name} /></label>
	<label>Age:<input type="number" bind:value={user.age} /></label>
	<button disabled={!ok} on:click={createUser} type="button">Create User</button
	>
</div>

{#if result}
	<p>Result: {JSON.stringify(result)}</p>
{/if}

{#if validationErrors}
	<p>Validation Errors:</p>
	<pre>{JSON.stringify(validationErrors, null, 2)}</pre>
{/if}
