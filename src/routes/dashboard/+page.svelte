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
		<img src="data:image/png;base64,{data.studentInfo.StudentInfo.Photo}" alt="the student" />
		<h2>{data.studentInfo.StudentInfo.FormattedName.split(' ')[0]}</h2>
		<h2>{data.studentInfo.StudentInfo.CurrentSchool}</h2>
	{/if}
</header>

{#if data}
	<div id="courseGrid">
		{#each courses as course}
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div style="display: flex; align-items: center">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						id="expand"
						on:click={() => {
							if (selectedCourse === course.Title) {
								selectedCourse = '';
							} else {
								selectedCourse = course.Title;
							}
						}}
						class="material-symbols-outlined"
						>{#if selectedCourse === course.Title}
							arrow_drop_down
						{:else}arrow_right{/if}</span
					>
					<h1 style="text-align: center; flex: 1;">{course.Title}</h1>
				</div>
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
	#expand {
		color: white;
		font-size: 35px;
		user-select: none;
		cursor: pointer;
	}
	#courseGrid div {
		padding: 1em;
		background-color: #363636;
		border-radius: 16px;
		margin: 0.5em;
	}
</style>
