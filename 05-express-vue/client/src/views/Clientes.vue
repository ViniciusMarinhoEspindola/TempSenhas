<template>
  <div>
    <h1>Clientes</h1>
    <div class="create-cliente">
      <label for="nome">Criar Cliente:</label>
      <input
        type="text"
        name="nome"
        v-model="cliente.nome"
        placeholder="Digite seu nome..."
      />
      <select name="status" v-model="cliente.status">
        <option
          v-for="option in cliente.options"
          v-bind:value="option.value"
          v-bind:key="option.text"
        >
          {{ option.text }}
        </option>
      </select>
      <button v-on:click="cadastrarCliente">Cadastrar</button>
    </div>

    <hr />
    <p v-if="erros">{{ erros }}</p>

    <div class="clientes-container">
      <div
        class="clientes"
        v-for="(cliente, index) in clientes"
        v-bind:item="cliente"
        v-bind:index="index"
        v-bind:key="cliente._id"
        v-on:dblclick="deletarCliente(cliente._id)"
      >
        {{
          `${cliente.createdAt.getDate()}/${cliente.createdAt.getMonth()}/${cliente.createdAt.getFullYear()}`
        }}
        <p class="text">{{ cliente.nome }}</p>
        <p class="text">{{ cliente.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Cliente from "@/components/Cliente.vue";
import ClienteService from '../services/ClienteService';

export default {
  name: 'Clientes',
  data() {
    return {
      clientes: [],
      erros: '',
      cliente: {
        nome: '',
        status: null,
        options: [
          { text: 'Ativado', value: true },
          { text: 'Desativado', value: false },
        ],
      },
    };
  },
  async created() {
    this.getClientes();
  },
  methods: {
    async getClientes() {
      try {
        this.clientes = await ClienteService.getClientes();
      } catch (err) {
        this.erros = err.message;
      }
    },
    cadastrarCliente() {
      ClienteService.cadastrarCliente(this.cliente.nome, this.cliente.status);

      this.getClientes();
    },
    deletarCliente(id) {
      ClienteService.deletarCliente(id);

      this.getClientes;
    },
  },
};
</script>
