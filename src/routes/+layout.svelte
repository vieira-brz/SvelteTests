<script lang="ts">
    import "../app.css";

    import navbar from '$lib/json/navbar.json';

    import Cabecalho from "$lib/components/paginas/layout/Cabecalho.svelte";
    import Menu from "$lib/components/paginas/layout/Menu.svelte";
    import Rodape from "$lib/components/paginas/layout/Rodape.svelte";
</script>

<div class="layout">

    <Cabecalho />
    
    <main>
        <Menu {navbar} />

        <div class="container-app">
            <slot />
        </div>
    </main>

    <Rodape />
</div>

<style>

    main {
        z-index: 1;
        display: flex;
        background: var(--cinza);
        height: calc(100vh - 160px);
    }

    .container-app {
        width: 100%;
        padding: 20px;
        box-shadow: inset var(--shadow);
    }
</style>