import axios from '../../lib/axios'

const deleteUser = async (url, token) => {
  const response = await axios.delete(`${url}/users`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteUser }
