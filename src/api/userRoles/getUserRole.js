import axios from '../../lib/axios'

const getUserRole = async (url, token, id) => {
  const response = await axios.get(`${url}/user_roles/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUserRole }
