import axios from 'axios'

const config = {
  headers: {
  },
}

//Cria a conexão com a API que está hospedada em 'https://aplicativos.avantti.com.br/apiap/'
const instance = axios.create({
  baseURL: 'https://aplicativos.avantti.com.br/apiap/',
  timeout: 10000,
  headers: config.headers,
})

export default instance
