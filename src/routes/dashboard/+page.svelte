<script>
	export let form;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form method="POST">
	<label>
		School URL
		<input name="schoolURL" />
	</label>
	<label>
		Username
		<input name="username" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Log in</button>
</form>
{#if form}
	{#each form?.grades.Gradebook.Courses.Course as course}
        <h1>{course.Title}</h1>
        <h3>Taught by {course.Staff}</h3>
		{#each course.Marks.Mark.Assignments.Assignment as assignment}
			<p>Name: {assignment.Measure}</p>
            <p>Grade: {assignment.Score}</p>
			<br />
		{/each}
	{/each}
{/if}
