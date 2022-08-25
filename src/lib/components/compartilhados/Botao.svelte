<script lang="ts">
    export let icon: string = '';
    export let style: string = '';
    export let vazio: boolean = false;
    export let type: string = 'button';
    export let disabled: boolean = false;
    export let infoType: string = 'primary';
    export let fill: 'full' | 'half' | '' = '';
</script>

<button 
    {type} 
    {disabled} 
    class="{infoType} fill-{fill}"
    class:vazio
    {style}
>
    {#if icon}
        <i class="{icon}"></i>
    {/if}

    <slot></slot>
</button>

<style>
    button {
        color: #fff;
        cursor: pointer;
        padding: 5px 10px;
        font-weight: bold;
        border-radius: 4px;
        align-items: center;
        display: inline-flex;
        transition: .17s ease-in-out;
    } 
    button.vazio {
        transition: .12s ease-in-out !important;
    }
    button i {
        color: #fff;
        transition: .07s;
        font-size: .7em;
        margin: 0 9px 0 -1px;
    } 

    /* Events */
    button:disabled { 
        cursor: not-allowed !important;
        background-color: var(--cinza-3) !important; 
    } 
    button:disabled.vazio {
        color:var(--cinza-3) !important;
        border: 1px solid var(--cinza-3) !important;
        background-color: transparent !important;
    } 
    button:disabled.vazio:hover i { 
        color:var(--cinza-3) !important; 
    } 
    button:hover, button:hover i { 
        color: white !important; 
    }

    /* Success */
    button.success {
        background-color: var(--verde);
    } 
    button.success.vazio {
        color: var(--verde-2);
        border: 1px solid var(--verde-2);
    } 
    button.success:hover {
        background-color: var(--verde-2);
    }

    /* Danger */
    button.danger {
        background-color: var(--vermelho);
    } 
    button.danger.vazio {
        color: var(--vermelho-2);
        border: 1px solid var(--vermelho-2);
    } 
    button.danger:hover {
        background-color: var(--vermelho-2);
    }

    /* Warn */
    button.warn {
        background-color: var(--amarelo);
    } 
    button.warn.vazio {
        color: var(--amarelo-2);
        border: 1px solid var(--amarelo-2);
    } 
    button.warn:hover {
        background-color: var(--amarelo-2);
    }

    /* Info */
    button.info {
        background-color: var(--info);
    } 
    button.info.vazio {
        color: var(--info-2);
        border: 1px solid var(--info-2);
    } 
    button.info:hover {
        background-color: var(--info-2);
    }

    /* Primary */
    button.primary {
        background-color: var(--azul);
    } 
    button.primary.vazio {
        color: var(--azul-2);
        border: 1px solid var(--azul-2);
    } 
    button.primary:hover {
        background-color: var(--azul-2);
    }

    /* Void */
    button.vazio {
        color: inherit;
        border: 1px solid;
        background-color: inherit;
    } 
    button.vazio i {
        color: inherit;
    }

    /* Fills */
    button.fill-full {
        width: 100%;
    }
    button.fill-half {
        width: 49%;
    }
</style>