<script lang="ts">
    export let title: string = 'Título do Card';
    export let times: boolean = true;

    export let quote: string = '';

    export let orientation: 'row' | 'col' = 'row';
    export let src: string = 'https://avatars.githubusercontent.com/u/77009586?v=4';
    export let alt: string = 'Imagem ilustrativa';
    export let width: string = '130px';
    export let height: string = '130px';
    export let maxHeight: string = '100%';

    if (quote === '') {
        height = (parseInt(height.replace('px', '')) + 42) +'px';
        maxHeight = (parseInt(maxHeight.replace('px', '')) + 40) +'%';
    }
</script>   

<div 
    class="card {orientation}-orientation"
>
    <div class="card-img">
        {#if orientation === 'row'}
            <img {src} {alt} style="width:{width};" />
        {:else}
            <img {src} {alt} style="height:{height};" />
        {/if}
    </div>
    
    <div class="card-content">
        <header>
            { title }
    
            {#if times}
                <i class="fas fa-times"></i>
            {/if}
        </header>

        <div class="card-body" style="height: {height}">
            <div style="max-height: {maxHeight};">
                <slot></slot>        
            </div>
        </div>
        
        {#if quote.length > 0} 
            <footer>
                <small class="info-citacao">{ quote }</small>
            </footer>
        {/if}
    </div>
</div>

<style>
    .card {
        width: 100%;
        height: 100%;
        display: flex;
        width: fit-content;
        border-radius: 4px;
        background: var(--branco);
        box-shadow: var(--shadow);
    }

    .col-orientation {
        height: auto;
        max-width: 300px;
        position: relative;        
        flex-direction: column;
    }

    .col-orientation i {
        top: 0;
        right: 0;
        padding: 5px;
        cursor: pointer;
        position: absolute;
        background: var(--branco);
        box-shadow: var(--shadow);
        border-bottom-left-radius: 7px;
        transition: .2s ease-in-out;
    }

    .col-orientation i:hover {
        padding: 10px;
        color: #ffffff !important;
        background: var(--gradient-type-2);
    }

    .row-orientation {
        height: auto;
        max-width: 500px;
        flex-direction: row;
    }

    .row-orientation > .card-img > img {
        height: 100% !important;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-right: 1px solid var(--gradient-transparent);
    }

    .col-orientation > .card-img > img {
        width: 100% !important;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 1px solid var(--gradient-transparent);
    }

    .card-content {
        height: 100%;
    }

    .card-content > header,
    .card-content > footer {
        padding: 10px;
        display: flex;
        height: 42px;
        align-items: center;
        color: var(--cinza-5);
        justify-content: space-between;
    }

    .card-content > header > .fa-times {
        margin-left: 15px;
        color: var(--cinza-2);
    }

    .card-content > .card-body {
        padding: 10px;
        height: calc(100% - 85px);
        border-top: 1px solid var(--cinza-4);
        border-bottom: 1px solid var(--cinza-4);
    }

    .card-content > .card-body > div {
        padding: 0 0 10px 0;
        overflow: hidden auto;
    }

    .card-content > footer > small {
        font-size: .7rem;
    }
    .card-content > footer > small:before { content: '* '; }

    .card-content > footer > small.info-citacao {
        font-style: italic;
    }
    .card-content > footer > small.info-citacao:before { content: '“ '; font-size: .8rem; }
    .card-content > footer > small.info-citacao:after { content: ' ”'; font-size: .8rem; }
</style>