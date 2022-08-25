<script lang="ts">
    import { menuView } from "$lib/stores/menuView";
    import { onMount } from 'svelte';
    import VBotoes from "$lib/components/paginas/index/VBotoes.svelte";
    import VCards from "$lib/components/paginas/index/VCards.svelte";
    
    onMount(() => {
        $menuView = sessionStorage.getItem('menuViewActive');
    });
</script>

<svelte:head>
    <title>VB | Testes</title>
</svelte:head>

<div class="container-items">
    {#if $menuView === 'botoes'}
        <VBotoes />
    {:else if $menuView == 'cards'}
        <VCards />
    {:else if $menuView == 'forms'}
        Forms
    {:else if $menuView == 'config'}
        Config
    {/if}
</div>

<style>
    .container-items {
        height: 100%;
        /* border: 1px solid; */
    }
</style>