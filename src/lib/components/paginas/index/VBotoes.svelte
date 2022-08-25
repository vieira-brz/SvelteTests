<script lang="ts">
    import Titulo from "$lib/components/compartilhados/Titulo.svelte";
    import Botao from "$lib/components/compartilhados/Botao.svelte";

    let style_Titulo = 'margin-top: 20px;'
    let style_Button = 'margin-bottom: 10px';
</script>

<div class="view-botoes">
    <Titulo tag='h3'>
        Botões Normais
        <div class="divisoria"></div>
    </Titulo>

    <div class="container-buttons">
        <Botao icon={'fas fa-user-alt'} infoType={'success'}> Botão ícone </Botao>
        <Botao infoType={'danger'}> Botão sem ícone </Botao>
        <Botao infoType={'warn'} disabled={true}> Botão desabilitado </Botao>
        <Botao infoType={'info'}> Botão ação </Botao>
        <Botao infoType={'primary'}> Botão normal </Botao>
    </div>

    <!-- ===================================- -->

    <Titulo tag='h3' style={style_Titulo}>
        Botões Sem Preenchimento
        <div class="divisoria"></div>
    </Titulo>

    <div class="container-buttons">
        <Botao vazio={true} icon={'fas fa-user-alt'} infoType={'success'}> Botão ícone </Botao>
        <Botao vazio={true} infoType={'danger'}> Botão sem ícone </Botao>
        <Botao vazio={true} infoType={'warn'} disabled={true}> Botão desabilitado </Botao>
        <Botao vazio={true} infoType={'info'}> Botão ação </Botao>
        <Botao vazio={true} infoType={'primary'}> Botão normal </Botao>
    </div>

    <!-- ===================================- -->

    <Titulo tag='h3' style={style_Titulo}>
        Botões de Tamanhos Diferentes
        <div class="divisoria"></div>
    </Titulo>

    <div class="container-buttons container-buttons-vertical">
        <Botao style={style_Button} icon={'fas fa-user-alt'} fill={'full'}> Botão - Full Content </Botao> <br>
        <Botao style={style_Button} fill={'half'}> Botão - Medium Content</Botao> <br>
        <Botao style={style_Button}> Botão - Normal </Botao>
    </div>
</div>

<style>
    .container-buttons {
        margin-top: 10px;
    }
</style>