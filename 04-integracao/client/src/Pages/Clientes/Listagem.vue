<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <b-card title="Listagem dos Clientes" class="main-card mb-4">
        <b-table bordered fixed :items="items" :fields="fields" :head-variant="color" ></b-table>
    </b-card>
    </div>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";

    export default {
        components: {
            PageTitle,
        },
        data: () => ({
            heading: 'Clientes',
            icon: 'pe-7s-users icon-gradient bg-arielle-smile',

            fields: [ 'cliente', 'status' ],
            items: [
                {  cliente: 'Dickerson', status: 'Ativo' },
                {  cliente: 'Larsen', status: 'Desativado' },
                {  cliente: 'Geneva', status: 'Ativo' }
            ],
            color: 'light'
        })
    }

</script>