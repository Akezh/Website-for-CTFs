<script lang="ts">
    import { Accordion, AccordionItem } from "svelte-accessible-accordion";
    import { toast } from '@zerodevx/svelte-toast'
    import { ConfettiExplosion } from 'svelte-confetti-explosion'
    import { tick } from 'svelte'
    import axios from "axios";
    import { userStore } from "../stores/userStore";
    import { LINK_URL, API_URL } from '../config';

    const WEB3 = "https://gist.github.com/ironsoul0/c14856923186ec1f754ee849f78aa0e1";
    const CONTRACT = "https://rinkeby.etherscan.io/address/0x0bff684cfdbd855402b1cfce7f562bbfafd1b824";

    let isVisible = false;

    let challenges = [];
    $: challenges = $userStore.isLoggedIn ? [
        {
            name: 'Eminem',
            score: 50,
            id: 1,
            link: "task1",
            description: `
                <div>
                    <p>Legends say that all hackers love rap music..</p>
                    <p>I guess we all know the best rap artist?</p>
                </div>
            `,
        },
        {
            name: 'With love from N17R',
            score: 100,
            id: 2,
            link: "task2",
            description: `
                <div>
                    <p>All we need is love!</p>
                </div>
            `
        },
        {
            name: 'TOP Secret',
            score: 150,
            id: 3,
            link: "task3",
            description: `
                <div>
                    <p>You have to prove that you are a real hacker!</p>
                </div>
            `
        },
        {
            name: 'Help Yerlan',
            score: 150,
            id: 4,
            link: "task4",
            description: `
                <div>
                    <p>Yerlan recently started working on some cool project.</p>
                    <p>He says that his website is really secure but let's prove him wrong..</p>
                    <p>Some people also told me he really loves eating Oreo. Maybe this will help?</p>
                </div>
            `
        },
        {
            name: 'Help Yerlan 2',
            score: 200,
            id: 5,
            link: "task5",
            description: `
                <div>
                    <p>It seems that Yerlan changed his authentication approach this time..</p>
                    <p>But is the new approach safer?..</p>
                    <p>It seems that he has also uploaded some <a class="underline" target="_blank" href="${LINK_URL}/public/task5/dictionary.txt">interesting file</a> to his GitHub.</p>
                </div>
            `
        },
        {
            name: 'Oogway and Web3',
            score: 400,
            id: 6,
            description: `
                <div>
                    <p>Legend says that Aidar once invited Oogway to explain Web3 to N17R students.</p>
                    <p>Oogway did his best but did students really understand how to work with smart contracts?</p>
                    <p>Oogway has left <a class="underline" target="_blank" href="${CONTRACT}">this</a> and <a class="underline" target="_blank" href="${WEB3}">this</a> to check.. Good luck!</p>
                </div>
            `
        },
        {
            name: '_____ code',
            score: 100,
            id: 7,
            description: `
                <div>
                    <audio controls>
                      <source src="audio/task7.wav" type="audio/wav">
                    Your browser does not support the audio element.
                    </audio>
                </div>
            `
        },
        {
            name: 'Company!',
            score: 100,
            id: 8,
            description: `
                <div>
                    <p>(1,1),(1,2),(1,3),(1,4),(1,5),(2,5),(3,5),(3,4),(3,3),(3,2),(3,1),(2,1),(1,1)</p>
                    <p>(4,1),(4,2),(5,4),(4,4),(4,5),(5,5),(6,5),(6,4),(5,2),(6,2),(6,1),(5,1),(4,1)</p>
                    <p>(7,3),(7,4),(8,5),(9,5),(9,4),(9,3),(9,2),(9,1),(8,1),(8,2),(8,3),(8,4),(7,3)</p>
                </div>
            `
        },
        {
            name: 'WHOAMI?',
            score: 200,
            id: 9,
            description: `
                <div>
                    <div class="flex items-center gap-32">
                        <img alt="avatar2" src="images/avatar2.jpeg" height="300" width="200" />
                        <img alt="avatar" src="images/avatar.jpeg" height="200" width="200" />
                        <p>bsog{k0c_wy3_dadb_km_rads_ovq1efg}</p>
                    </div>
                </div>
            `
        },
        {
            name: 'Oogway strikes again!',
            score: 200,
            id: 10,
            description: `
                <div>
                    <div class="flex items-center gap-32">
                        <img alt="oogway" src="images/oogway.png" width="300" />
                    </div>
                    <p class="mt-6">Yesterday is history, tomorrow is a mystery, and today is a gift.. <span style="color: rgba(255,255,255,.01)">image metadata?..</span></p>
                </div>
            `
        },
    ] : [];
    const inputValues = Array.from(new Array(challenges.length)).fill('');
    const expanded = Array.from(new Array(challenges.length)).fill(false);

    let backgroundColors;
    $: backgroundColors = expanded.map((n) => !n ? 'rgba(255,255,255,.04)' : '#062a4e');

    let solvedTasks = []
    $: solvedTasks = $userStore.solvedTasks.map(x => x.task_id);

    const handleTaskSubmit = (taskId: number, answer: string) => async () => {
        try {
            const response = await axios.post(`${API_URL}/api/task`, {
                id: taskId,
                flag: answer,
            }, { headers: { Authorization: localStorage.getItem('accessToken')}});
            const { message } = response.data;

            if (response.status === 200) {
                $userStore.solvedTasks.push({ task_id: taskId });
                $: solvedTasks = $userStore.solvedTasks.map(x => x.task_id);
                isVisible = false;
                await tick();
                isVisible = true;
                toast.push(message, {
                    theme: {
                        '--toastBackground': '#48BB78',
                        '--toastBarBackground': '#2F855A'
                    }})
            }
        } catch (error) {
            toast.push(error.response.data.message, {
                theme: {
                    '--toastBackground': '#F56565',
                    '--toastBarBackground': '#C53030'
                }})
        }
    }
</script>

{#if isVisible}
    <div>
        <ConfettiExplosion />
    </div>
{/if}

<p class="font-bold text-4xl uppercase mb-12">Challenges</p>
<div class="text-white">
    <Accordion multiselect>
        {#each challenges as { name, score, id, description, link }, i}
            <div style="margin-top: 8px; background-color: {solvedTasks?.includes(id) ? "rgba(77,255,136,0.5)" : backgroundColors[i]}">
                <AccordionItem bind:expanded={expanded[i]} title="{id}. {name} ({score} score)">
                    <div>
                        {@html description}
                    </div>
                    {#if link}
                        <p>Link: <a target="_blank" href="{`${LINK_URL}/${link}`}" class="underline">{`${LINK_URL}/${link}`}</a></p>
                    {/if}
                    <div class="flex items-center content-between gap-64 mt-4">
                        <input type="text" id="default-input" bind:value={inputValues[i]} placeholder="Flag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <button type="click" on:click|preventDefault={handleTaskSubmit(i+1, inputValues[i])}
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style="width: 120px;">
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
