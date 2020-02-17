import axios from 'axios';

const url = 'api/cliente';

class ClienteService {
  static getClientes() {
    return new Promise((resolve, reject) => {
      try {
        const res = axios.get(url);

        res
          .then(response => response.data)
          .then(data =>
            resolve(
              data.map(cliente => ({
                ...cliente,
                createdAt: new Date(cliente.created_at),
              })),
            ),
          );
      } catch (err) {
        reject(err);
      }
    });
  }

  static cadastrarCliente(nome, status) {
    axios.post(url, {
      nome,
      status,
    });
  }

  static deletarCliente(id) {
    axios.delete(`${url}/${id}`);
  }
}

export default ClienteService;
