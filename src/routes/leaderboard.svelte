<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { userStore } from "../stores/userStore";

    type Leaderboard = Array<{
        name: string;
        score: string | number;
        members: string;
    }>;

    let ranking: Leaderboard = [];

    onMount(async () => {
       const leaderboardResponse = await axios.get('http://localhost:8000/api/leaderboard');
       const { teams } = leaderboardResponse.data;
       ranking = teams.sort((a, b) => b.score - a.score);

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

<p class="font-bold text-4xl uppercase mb-12">LEADERBOARD</p>

<div class="flex flex-col text-white">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                    <thead class="border-b">
                    <tr>
                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left uppercase">
                            Rank
                        </th>
                        <th scope="col" class="text-sm font-medium px-10 py-4 text-left uppercase">
                            Team name
                        </th>
                        <th scope="col" class="text-sm font-medium px-10 py-4 text-left uppercase">
                            Score
                        </th>
                        <th scope="col" class="text-sm font-medium px-10 py-4 text-left uppercase">
                            Members
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {#each ranking as { username, name, score, members }, i}
                            {#if $userStore.username === username}
                                <tr class="border-b" style="background-color: #495C83">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">#{i+1}</td>
                                    <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                        {name}
                                    </td>
                                    <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                        {score}
                                    </td>
                                    <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                        {members}
                                    </td>
                                </tr>
                            {:else}
                                <tr class="border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">#{i + 1}</td>
                                    <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                        {name}
                                    </td>
                                    <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                        {score}
                                    </td>
                                    <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                        {members}
                                    </td>
                                </tr>
                            {/if}
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
