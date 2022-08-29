<script lang="ts">
    import { menuView } from "$lib/stores/menuView";
    import Logo from "$lib/components/compartilhados/Logo.svelte";

    function alteraMenu(): void { 
        $menuView = '';
        sessionStorage.setItem('menuViewActive', '');
    }
</script>

<header on:click={alteraMenu}>
    <Logo>Vieira Braz</Logo>
</header>

<style>
    header {
        height: 60px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--branco);
    }
</style>