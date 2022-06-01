import axios from '../../lib/axios'

async function getMessage(token, id) {
  const response = await axios.get(`/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getMessage }
