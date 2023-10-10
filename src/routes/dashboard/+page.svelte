<script>
	export let form;
</script>

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
