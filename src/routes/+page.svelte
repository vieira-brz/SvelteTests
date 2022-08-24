<script lang="ts">
    import { menuView } from "$lib/stores/menuView";
</script>

<svelte:head>
    <title>VB | Testes</title>
</svelte:head>

<div class="container-items">
    {#if $menuView === 'botoes'}
        Botoes
    {:else if $menuView == 'cards'}
        Cards
    {:else if $menuView == 'forms'}
        Forms
    {/if}
</div>

<style>
    .container-items {
        height: 100%;
        border: 1px solid;
    }
</style>