import axios from '../../lib/axios'

const getMessages(token) => {
  const response = await axios.get(`${url}/messages`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getMessages }
