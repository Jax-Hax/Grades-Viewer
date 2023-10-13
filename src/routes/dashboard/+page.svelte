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

<header style="padding: 1em;">
	{#if data}
		<img
			src="data:image/png;base64,{data.studentInfo.StudentInfo.Photo}"
			style="border-radius: 50%"
			alt="the student"
		/>
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
					<div style="background-color: #383838; padding: 1em"><div id="gradesTable">
						<p class="boldedHeaders">Name</p>
						<p class="boldedHeaders">Score</p>
						<p class="boldedHeaders">Assignment Type</p>
						<p class="boldedHeaders">Date</p>
						{#each course.Marks.Mark.Assignments.Assignment as assignment}
							<p>{assignment.Measure}</p>
							<p>{assignment.Score}</p>
							<p>{assignment.Type}</p>
							<p>{assignment.Date}</p>
						{/each}
					</div></div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style>
	#courseGrid {
		background-color: #2c2c2c;
		padding: 0.5em;
		color: white;
		border-radius: 2em;
		font-size: 1.25em;
		text-align: center;
	}
	h2 {
		color: white;
	}
	#gradesTable > p {
		padding: 1em;
		color: white;
		background-color: #383838;
	}
	.boldedHeaders{
		border-bottom: 2px solid black !important;
		border-left: 1px solid black;
		border-right: 1px solid black
	}
	#gradesTable {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		background-color: black !important;
		overflow: scroll;
		gap: 1px;
		padding: 0 !important;
	}
	
	#expand {
		color: white;
		font-size: 35px;
		user-select: none;
		cursor: pointer;
	}
	#courseGrid div {
		padding: 1em;
		background-color: #333333;
		border-radius: 1.5em;
		margin: 0.5em;
	}
</style>
