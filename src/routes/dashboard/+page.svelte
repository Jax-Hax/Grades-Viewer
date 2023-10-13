<script>
	export let data;
	let courseOptions = [];
	let courses = [];
	$: {
		courses = data.grades.Gradebook.Courses.Course;
		courseOptions = courses.map((course) => course.Title);
	}
	let selectedCourse = null;
</script>

<header>
	{#if data}
		<img src="data:image/png;base64,{data.studentInfo.StudentInfo.Photo}" alt="the student"/>
		<h2>{data.studentInfo.StudentInfo.FormattedName.split(' ')[0]}</h2>
		<h2>{data.studentInfo.StudentInfo.CurrentSchool}</h2>
	{/if}
</header>
<label for="courseDropdown">Select a Course:</label>
<select
	id="courseDropdown"
	bind:value={selectedCourse}
	on:change={(event) => {
		selectedCourse = event.target.value;
	}}
>
	<option value="">Choose a course</option>
	{#each courseOptions as option}
		<option value={option}>{option}</option>
	{/each}
</select>

{#if data}
<div id="courseGrid">
	{#each courses as course}
		{#if selectedCourse === course.Title || !selectedCourse}
			<div>
				<h1>{course.Title}</h1>
				<h3>Taught by {course.Staff}</h3>
				<h3>{course.Marks.Mark.CalculatedScoreString}</h3>
				{#if selectedCourse === course.Title}
				{#each course.Marks.Mark.Assignments.Assignment as assignment}
					<p>Name: {assignment.Measure}</p>
					<p>Grade: {assignment.Score}</p>
					<br />
				{/each}
				{/if}
			</div>
		{/if}
	{/each}
</div>
{/if}

<style>
	#courseGrid {
		background-color: #2c2c2c;
		padding: 2em;
		color: white;
		border-radius: 16px;
		font-size: 1.25em;
		text-align: center;
	}
	#courseGrid div {
		padding: 1em;
		background-color: #363636;
		border-radius: 16px;
		margin: 0.5em;
	}
</style>