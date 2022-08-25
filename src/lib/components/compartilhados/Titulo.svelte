<script lang="ts">
    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    export let style: string = '';
</script>

<svelte:element this={tag} class="title title-{tag}" {style}>
    <slot></slot>
</svelte:element>

<style>
    .title {
        font-weight: 400;
        width: fit-content;
        color: var(--cinza-3);
    }

    .title-h1 {
        font-size: 1.9rem;
    }

    .title-h2 {
        font-size: 1.7rem;
    }

    .title-h3 {
        font-size: 1.5rem;
    }

    .title-h4 {
        font-size: 1.3rem;
    }

    .title-h5 {
        font-size: 1.1rem;
    }

    .title-h6 {
        font-size: 1rem;
    }
</style>