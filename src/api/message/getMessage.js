import axios from '../../lib/axios'

const getMessage = async (url, token, id) => {
  const response = await axios.get(`${url}/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getMessage }
