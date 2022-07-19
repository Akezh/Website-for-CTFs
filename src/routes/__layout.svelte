<script lang="ts">
    import '../tailwind.css'
    import { SvelteToast } from '@zerodevx/svelte-toast'

    import LeftNavBar from "../components/LeftNavBar.svelte";
    import TopNavBar from "../components/TopNavBar.svelte";

    import axios from 'axios';
    import { userStore } from "../stores/userStore";
    import { onMount } from "svelte";
    import { API_URL } from '../config';

    onMount(async () => {
        const profileResponse = await axios.get(`${API_URL}/api/profile`, {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        });
        const { solved_tasks, team } = profileResponse.data;
        console.log("fetched solved_tasks", solved_tasks);

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

    const options = {};
</script>

<title>N17R CTF</title>
<SvelteToast {options} />
<TopNavBar />
<LeftNavBar />

<div class="absolute top-16 left-64 right-0 p-8">
    <slot></slot>
</div>

