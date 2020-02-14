<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left  mr-3 header-user-info">
                        <div class="widget-heading">{{usuario}}</div>
                        <div class="widget-subheading">{{tipo_usuario}}</div>
                    </div>
                    <div class="widget-content-left">
                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" right>
                            <button type="button" tabindex="0" class="dropdown-item">
                                <i class="pe-7s-tools"></i>
                                Alterar Dados
                            </button>
                            <div tabindex="-1" class="dropdown-divider"></div>
                            <button type="button" tabindex="0" class="dropdown-item">
                                <i class="pe-7s-back"></i>
                                Sair
                            </button>
                        </b-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            usuario: String,
            tipo_usuario: String
        },
        data: () => ({
        }),

        methods: {}
    }


</script>
