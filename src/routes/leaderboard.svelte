<script lang="ts">
    type Leaderboard = Array<{
        teamName: string;
        score: string | number;
    }>;

    let ranking: Leaderboard = [
        { teamName: "Glider", score: "999" },
        { teamName: "Ramstein", score: "1233" },
        { teamName: "Gusaron", score: "3243" },
        { teamName: "Nitron", score: "321443" }
    ];

    ranking = ranking.sort((a, b) => b.score - a.score);
</script>

<p class="font-bold text-4xl uppercase">SCOREBOARD</p>

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
                    </tr>
                    </thead>
                    <tbody>
                    {#each ranking as { teamName, score }, i}
                        <tr class="border-b" style:color="background-color: {i % 2 === 0 ? 'rgba(255,255,255,.04)' : 'transparent'}">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">#{i+1}</td>
                            <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                {teamName}
                            </td>
                            <td class="text-sm font-light px-10 py-4 whitespace-nowrap">
                                {score}
                            </td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
