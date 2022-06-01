import axios from '../../lib/axios'

async function getUsers(token) {
  const response = await axios.get('/users', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUsers }
