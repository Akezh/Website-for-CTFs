<script lang="ts">
    import { userStore } from "../stores/userStore";

    let solvedProblems = '';

    $: solvedProblems = $userStore.solvedTasks
        .sort((a, b) => a.task_id - b.task_id)
        .map(n => n.task_id)
        .join(", ");
</script>

<div class="mx-64 text-white" style="margin-left: 20%; margin-right: 20%">
    <h1 class="mb-8">Welcome to CTF!</h1>

    <img alt="CTF Mask" src="https://c.tenor.com/6OAM535OZ-QAAAAC/hacker-mask.gif" width="500" />

    <div class="my-8" />
    {#if $userStore.isLoggedIn}
        <div class="flex items-center justify-between mb-2" style="width: 500px">
            <p>Team name: </p>
            <p>{$userStore.teamName || ''}</p>
        </div>
        <div class="flex items-center justify-between mb-2" style="width: 500px">
            <p>Score: </p>
            <p>{$userStore.score || 0}</p>
        </div>
        <div class="flex items-center justify-between mb-2" style="width: 500px">
            <p>Members: </p>
            <p>{$userStore.members || ''}</p>
        </div>
        <div class="flex items-center justify-between mb-2" style="width: 500px">
            <p>Solved Challenges: </p>
            <p>{solvedProblems || '-'}</p>
        </div>
    {/if}
</div>
