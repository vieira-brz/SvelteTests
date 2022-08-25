<script lang="ts">
    import type INavbar from '$lib/interfaces/INavbar.ts';
    import { menuView } from '$lib/stores/menuView';
    
    export let navbar: INavbar;

    function alteraMenu(argString: string) { 
        $menuView = argString;
        sessionStorage.setItem('menuViewActive', argString);
    }

    let fechado = true;
    function toggleMenu() {
        fechado = !fechado;
    }
</script>

<nav class:fechado>
    <ul>
        <i class:fechado 
           class="fas fa-chevron-left toggler" 
           on:click={toggleMenu}
        ></i>

        {#each navbar as item (item.nome)}
            {#if item.componente == 'config'}
                <li
                    class="config"
                    class:active_item={$menuView === item.componente ? true : false} 
                    on:click|preventDefault={alteraMenu(item.componente)}
                >
                    <i class="{item.icon}"></i>
                    <span> {item.nome} </span>
                </li>
            {:else}
                <li
                    class:active_item={$menuView === item.componente ? true : false} 
                    on:click|preventDefault={alteraMenu(item.componente)}
                >
                    <i class="{item.icon}"></i>
                    <span> {item.nome} </span>
                </li>
            {/if}
        {/each}
    </ul>
</nav>

<style>
    nav {
        width: 235px;
        position: relative;
        overflow: hidden auto; 
        padding: 20px 20px 40px 20px;
        background-color: var(--branco);  
        border-top: 1px solid var(--gradient-transparent);
        border-bottom: 1px solid var(--gradient-transparent);
        transition: .17s ease-in-out;
    }

    nav.fechado {
        width: 60px;
        text-align: center;
    }

    nav.fechado > ul {
        display: flex;
        flex-direction: column;
        align-content: center;
    }

    nav.fechado > ul > li > span {
        width: 0;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .toggler {
        float: right;
        cursor: pointer;
        transition: .17s;
        margin-bottom: 20px;
    }
    .toggler.fechado {
        float: unset;
        transform: rotateY(180deg);
    }
    
    nav > ul {
        height: 97%;
        overflow: hidden auto;
    }
    
    nav > ul > li.config {
        bottom: 0;
        position: absolute;
    }

    nav > ul > li {
        display: flex;
        font-size: 1.1rem;
        margin: 0 0 15px 0;
        align-items: center;
    }

    nav > ul > li > span {
        margin-left: 10px;
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