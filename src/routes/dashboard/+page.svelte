<script>
	export let data;
	let selectedCourse = null;
	let courseOptions = [{
    title: "ADV PLACEMENT ERPN HISTORY (SS220H)",
    id: "math-101"
}
];
</script>
<label for="courseDropdown">Select a Course:</label>
    <select id="courseDropdown" bind:value={selectedCourse} on:change={(event) => {selectedCourse = event.target.value}}>
        <option value="">Choose a course</option>
        {#each courseOptions as option}
            <option value={option.id}>{option.title}</option>
        {/each}
    </select>
{#if data}
	{#each data?.grades.Gradebook.Courses.Course as course}
	{#if selectedCourse === course.Title || !selectedCourse}
        <h1>{course.Title}</h1>
        <h3>Taught by {course.Staff}</h3>
		{#each course.Marks.Mark.Assignments.Assignment as assignment}
			<p>Name: {assignment.Measure}</p>
            <p>Grade: {assignment.Score}</p>
			<br />
		{/each}
		{/if}
	{/each}
{/if}
