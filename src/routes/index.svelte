<script lang="ts">
    import { userStore } from "../stores/userStore";

    let solvedProblems = '';

    $: solvedProblems = $userStore.solvedTasks
        .sort((a, b) => a.task_id - b.task_id)
        .map(n => n.task_id)
        .join(", ");
</script>

<div class="text-white">
    <div class="max-w-2xl mx-auto mt-10">
        <h1 class="mb-8">Welcome to CTF!</h1>

        <img alt="CTF Mask" src="https://c.tenor.com/6OAM535OZ-QAAAAC/hacker-mask.gif" class="w-full" />

        <div class="my-8" />
        {#if $userStore.isLoggedIn}
            <div class="flex items-center justify-between mb-2">
                <p>Team name: </p>
                <p>{$userStore.teamName || ''}</p>
            </div>
            <div class="flex items-center justify-between mb-2">
                <p>Score: </p>
                <p>{$userStore.score || 0}</p>
            </div>
            <div class="flex items-center justify-between mb-2">
                <p>Members: </p>
                <p>{$userStore.members || ''}</p>
            </div>
            <div class="flex items-center justify-between mb-2">
                <p>Solved Challenges: </p>
                <p>{solvedProblems || '-'}</p>
            </div>
        {/if}

    </div>
</div>
