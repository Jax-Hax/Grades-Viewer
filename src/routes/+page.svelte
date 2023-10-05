<script>
    const StudentVue = require('studentvue.js');
StudentVue.login('district url', 'username', 'password')
    .then(client => client.getMessages())
    .then(console.log);
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
