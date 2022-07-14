<script lang="ts">
    import { Accordion, AccordionItem } from "svelte-accessible-accordion";

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
    const expanded = Array.from(new Array(challenges.length)).fill(false);
    console.log('expanded', expanded);
    let backgroundColors;
    $: backgroundColors = expanded.map((n) => !n ? 'rgba(255,255,255,.04)' : '#062a4e');
</script>

<p class="font-bold text-4xl uppercase mb-12">Challenges</p>

<!--<p class="font-bold text-xl uppercase my-4">Blockchain</p>-->
<div class="text-white">
    <Accordion multiselect>
        {#each challenges as { name, score, id, description }, i}
            <div style="margin-top: 8px; background-color: {backgroundColors[i]}">
                <AccordionItem bind:expanded={expanded[i]} title="{id}. {name} ({score} score)">{@html description}</AccordionItem>
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
