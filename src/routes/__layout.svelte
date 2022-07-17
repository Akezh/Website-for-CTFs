<script lang="ts">
    import '../tailwind.css'

    import LeftNavBar from "../components/LeftNavBar.svelte";
    import TopNavBar from "../components/TopNavBar.svelte";

    import axios from 'axios';
    import { userStore } from "../stores/userStore";
    import { onMount } from "svelte";

    onMount(async () => {
        const profileResponse = await axios.get('http://localhost:8000/api/profile', {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        });
        const { solved_tasks, team } = profileResponse.data;

        userStore.update((prevStore) => ({
            ...prevStore,
            isLoggedIn: true,
            username: team.username,
            teamName: team.name,
            members: team.members,
            id: team.id,
            score: team.score,
            solvedTasks: solved_tasks
        }));
    });
</script>

<TopNavBar />
<LeftNavBar />

<div class="fixed top-16 left-64 right-0 p-8">
    <slot></slot>
</div>

