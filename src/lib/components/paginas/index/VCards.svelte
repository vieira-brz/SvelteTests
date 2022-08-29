<script lang="ts">
    import Titulo from "$lib/components/compartilhados/Titulo.svelte";
    import InfoCard from "$lib/components/compartilhados/cards/InfoCard.svelte";
    import ImgCard from "$lib/components/compartilhados/cards/ImgCard.svelte";
</script>

<div class="view-cards">
    <Titulo tag='h1'>
        Cards Informativos
        <div class="divisoria"></div>
    </Titulo>

    <div class="container-cards">
        <InfoCard
            title={'Título do Card Minimalista'}
            info={'Informação breve referente ao card minimalista'}
            type={'citacao'}
        >
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Libero alias ratione quibusdam in itaque. 
                Harum dolore cum qui dolor, reiciendis tenetur beatae quis vitae officiis, 
                enim temporibus obcaecati animi praesentium.
            </h1>
        </InfoCard>

        <ImgCard
            title={'Título do Card Minimalista 1    '}
            width={'165px'}
            height={'100px'}
            quote={'Informação breve referente ao card minimalista'}
        >
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Libero alias ratione quibusdam in itaque. 
                Harum dolore cum qui dolor, reiciendis tenetur beatae quis vitae officiis, 
                enim temporibus obcaecati animi praesentium.
            </h1>
        </ImgCard>
    </div>
</div>

<style>
    .container-cards {
        display: grid;
        margin-top: 10px;
        align-items: center;
        grid-template-columns: repeat(3, calc(99.9% / 3));
    }
</style>