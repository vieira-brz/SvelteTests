<script lang="ts">
    import type INavbar from '$lib/interfaces/INavbar.ts';
    import { menuView } from '$lib/stores/menuView';
    
    export let navbar: INavbar;

    function alteraMenu(argString: string) { $menuView = argString; }
</script>

<nav class="menu">
    <ul>
        {#each navbar as item (item.nome)}
            <li class:active_item={$menuView === item.componente ? true : false} on:click|preventDefault={alteraMenu(item.componente)}>
                <i class="{item.icon}"></i>
                <span> {item.nome} </span>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        top: 60px;
        padding: 20px;
        min-width: 200px;
        background-color: var(--branco);   
        border-top: 1px solid var(--gradient-transparent);
        border-bottom: 1px solid var(--gradient-transparent);
    }

    nav > ul > li {
        font-size: 1.1rem;
        margin: 0 0 15px 0;
    }

    nav > ul > li > span {
        text-decoration: none;
    }

    nav > ul > li:hover span,
    nav > ul > li:hover i {
        color: var(--gradient-default);
    }

    nav > ul > li.active_item span,
    nav > ul > li.active_item i {
        font-weight: bold;
        color: var(--gradient-default);
    }
    nav > ul > li.active_item span { border-bottom: 1px solid var(--gradient-default); }
</style>