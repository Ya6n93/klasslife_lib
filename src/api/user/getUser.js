import axios from '../../lib/axios'

async function getUser(token, id) {
  const response = await axios.get(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUser }
