import axios from 'axios'

const config = {
  headers: {
    // 'X-VTEX-API-AppToken': 'VHJNORGCMXKPLREWJWJNEUNRSTNJVAEGYGBAIEAHRMHAIQTMNSHMLZFBTRUVDWGMTERFQENEWCVSMNJCZBVDSRUYAZGRJEDUFVGEZNVJECQJDNOFISWBADTCJSFQXWUS',
    // 'X-VTEX-API-AppKey': 'vtexappkey-lojaanimale-ZGPRNG',
  },
}


const instance = axios.create({
  baseURL: 'https://aplicativos.avantti.com.br/apiap/swagger/v1/',
  timeout: 10000,
  headers: config.headers,
})

export default instance
