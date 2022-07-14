<script lang="ts">
    import { userStore } from "../stores/userStore.ts";

    const signOut = () => {
        window.localStorage.removeItem('accessToken');
        userStore.set({ isLoggedIn: false, teamName: undefined, score: undefined, members: undefined });
    }
</script>

<nav class="top-nav nav-fixed">
    <div class="nav-wrapper">
        <div><a href="#" data-activates="nav-mobile" class="button-collapse top-nav full"><i class="fas fa-bars" aria-label="Menu Bars"></i></a></div>
        <a class="logo-link text-amber-500" href="/"><span>CRYPTOHACK</span></a>

        <ul class="float-right flex gap-8 mr-8">
            {#if !$userStore.isLoggedIn}
                <li><a class="text-white text-sm uppercase hover:text-amber-500" href="/register/">Register</a></li>
                <li><a class="text-white text-sm uppercase hover:text-amber-500" href="/login/">Login</a></li>
            {:else}
                <li><p className="text-white text-sm uppercase hover:text-amber-500">Team: {$userStore.teamName || ''} ⚑</p></li>
                <li><a on:click={signOut} className="text-white text-sm uppercase hover:text-amber-500" style="color: white; cursor: pointer;">Sign Out</a></li>
            {/if}
        </ul>
    </div>
</nav>

<style>
    .nav-fixed {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1030;
        top: 0;
        box-shadow: none;
    }
    .top-nav {
        background-color: #0c1221;
    }
    nav .nav-wrapper {
        position: relative;
        height: 100%;
    }
    nav .button-collapse {
        float: left;
        position: relative;
        z-index: 1;
        height: 56px;
    }
    a.logo-link {
        font-family: 'IBM Plex Mono',Andale Mono,AndaleMono,monospace;
        font-size: 1.5em;
        margin-left: 1.2rem;
        font-weight: 600;
    }
    a, a:hover, a:visited {
        transition: color .2s ease;
    }

    @media only screen and (min-width: 601px) {
        nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
            height: 64px;
            line-height: 64px;
        }
    }
    @media only screen and (min-width: 993px) {
        nav a.button-collapse {
            display: none;
        }
    }
</style>


