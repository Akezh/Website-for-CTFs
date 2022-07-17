<script lang="ts">
    import { Accordion, AccordionItem } from "svelte-accessible-accordion";
    import axios from "axios";

    const challenges = [
        {
            name: 'Challenge 1',
            score: 50,
            id: 1,
            description: 'custom html',
        },
        {
            name: 'Challenge 2',
            score: 50,
            id: 2,
            description: '<p>Capture the Flag</p>'
        },
        {
            name: 'Challenge 3',
            score: 100,
            id: 3,
            description: 'ctf'
        },
        {
            name: 'Challenge 4',
            score: 100,
            id: 4,
            description: 'ctf'
        },
    ];
    const inputValues = Array.from(new Array(challenges.length)).fill('');
    const expanded = Array.from(new Array(challenges.length)).fill(false);

    let backgroundColors;
    $: backgroundColors = expanded.map((n) => !n ? 'rgba(255,255,255,.04)' : '#062a4e');

    const handleTaskSubmit = (taskId: number, answer: string) => async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/task', {
                headers: {
                    Authorization: localStorage.getItem('accessToken')
                },
                id: taskId,
                flag: answer,
            });
            const { message } = response.data;

            console.log('message', message);
        } catch (error) {
            console.log('error');
        }
    }
</script>

<p class="font-bold text-4xl uppercase mb-12">Challenges</p>

<!--<p class="font-bold text-xl uppercase my-4">Blockchain</p>-->
<div class="text-white">
    <Accordion multiselect>
        {#each challenges as { name, score, id, description }, i}
            <div style="margin-top: 8px; background-color: {backgroundColors[i]}">
                <AccordionItem bind:expanded={expanded[i]} title="{id}. {name} ({score} score)">
                    <div>
                        {@html description}
                    </div>
                    <div class="flex items-center content-between gap-64 mt-10">
                        <input type="text" id="default-input" bind:value={inputValues[i]} placeholder="Flag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <button type="click" on:click|preventDefault={handleTaskSubmit(i+1, inputValues[i])}
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm sm:w-auto px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style="width: 120px;">
                            Submit</button>
                    </div>
                </AccordionItem>
            </div>
        {/each}
    </Accordion>
</div>

<style>
    :global([data-accordion]) {
        list-style: none;
        font-size: 1rem;
    }
    :global([data-accordion-item] button) {
        transition: background-color .2s ease;
        font: inherit;
        line-height: inherit;
        color: inherit;
        cursor: pointer;
        padding: 1rem;
        width: 100%;
        text-align: left;
    }
    :global([data-accordion-item] button):active {
        background-color: #062a4e;
    }
    :global([data-accordion-item] [role="region"]) {
        background-color: #171B28;
        padding: 1rem;
    }
</style>
