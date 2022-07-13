<script lang="ts">
    import { Accordion, AccordionItem } from "svelte-accessible-accordion";

    const expanded = [false, false, false];
    let backgroundColors = ['rgba(255,255,255,.04)', 'rgba(255,255,255,.04)', 'rgba(255,255,255,.04)'];

    $: backgroundColors = expanded.map((n) => !n ? 'rgba(255,255,255,.04)' : '#062a4e');

    const challenges = [
        {
            name: 'Challenge 1',
            score: 100,
            id: 1,
            description: 'custom html'
        },
        {
            name: 'Challenge 2',
            score: 50,
            id: 2,
            description: 'ctf'
        },
    ];
</script>

<p class="font-bold text-4xl uppercase mb-12">Challenges</p>

<p class="font-bold text-xl uppercase my-4">Blockchain</p>
<div class="text-white">
    <Accordion multiselect>
        <div style="margin-top: 8px; background-color: {backgroundColors[0]}">
            <AccordionItem bind:expanded={expanded[0]} title="Title 1">Content 1</AccordionItem>
        </div>

        <div style="margin-top: 8px; background-color: {backgroundColors[1]}">
            <AccordionItem bind:expanded={expanded[1]} title="Title 2">Content 2</AccordionItem>
        </div>

        <div style="margin-top: 8px; background-color: {backgroundColors[2]}">
            <AccordionItem bind:expanded={expanded[2]} title="Title 3">Content 2</AccordionItem>
        </div>
    </Accordion>
</div>

<p class="font-bold text-xl uppercase mt-10 mb-4">Crypto</p>
<div class="text-white">
    <Accordion multiselect>
        <div style="margin-top: 8px; background-color: {backgroundColors[0]}">
            <AccordionItem bind:expanded={expanded[0]} title="Title 1">Content 1</AccordionItem>
        </div>

        <div style="margin-top: 8px; background-color: {backgroundColors[1]}">
            <AccordionItem bind:expanded={expanded[1]} title="Title 2">Content 2</AccordionItem>
        </div>

        <div style="margin-top: 8px; background-color: {backgroundColors[2]}">
            <AccordionItem bind:expanded={expanded[2]} title="Title 3">Content 2</AccordionItem>
        </div>
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
