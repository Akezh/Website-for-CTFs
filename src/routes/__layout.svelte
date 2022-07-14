<script lang="ts">
    import '../tailwind.css'

    import LeftNavBar from "../components/LeftNavBar.svelte";
    import TopNavBar from "../components/TopNavBar.svelte";
</script>

<TopNavBar />
<LeftNavBar />

<div class="fixed top-16 left-64 right-0 p-8">
    <slot></slot>
</div>

