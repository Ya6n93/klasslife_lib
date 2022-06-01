import axios from '../../lib/axios'

async function deleteUser(token) {
  const response = await axios.delete('/users', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteUser }
