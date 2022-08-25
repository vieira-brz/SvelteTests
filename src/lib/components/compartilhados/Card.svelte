<script lang="ts">
    export let title: string = 'Título do Card';
    export let info: string = 'Rodapé do Card';
    export let times: boolean = true;
    export let type: string = '';
</script>   

<div class="card">
    <header>
        { title }

        {#if times}
            <i class="fas fa-times"></i>
        {/if}
    </header>
    
    <div class="card-body">
        <slot></slot>
    </div>

    <footer>
        <small class="info-{type}">
            { info }
        </small>
    </footer>
</div>

<style>
    .card {
        width: fit-content;
        border-radius: 4px;
        background: var(--branco);
        box-shadow: var(--shadow);
    }

    .card > header,
    .card > footer {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card > header > .fa-times {
        margin-left: 15px;
        color: var(--cinza-2);
    }
    
    .card .card-body {
        padding: 10px;
        border-top: 1px solid var(--cinza-4);
        border-bottom: 1px solid var(--cinza-4);
    }

    .card > footer > small {
        font-size: .7rem;
    }
    .card > footer > small:before { content: '* '; }

    .card > footer > small.info-citacao {
        font-style: italic;
    }
    .card > footer > small.info-citacao:before { content: '“ '; font-size: .8rem; }
    .card > footer > small.info-citacao:after { content: ' ”'; font-size: .8rem; }
</style>