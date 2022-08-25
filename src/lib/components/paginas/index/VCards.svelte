<script lang="ts">
    import Titulo from "$lib/components/compartilhados/Titulo.svelte";
    import Card from "$lib/components/compartilhados/Card.svelte";
</script>

<div class="view-cards">
    <Titulo tag='h1'>
        Cards Informativos
        <div class="divisoria"></div>
    </Titulo>

    <div class="container-cards">
        <Card
            title={'Título do Card Minimalista'}
            info={'Informação breve referente ao card minimalista'}
            type={'citacao'}
        >
            <h1>teste</h1>
        </Card>
    </div>
</div>

<style>
    .container-cards {
        margin-top: 10px;
    }
</style>