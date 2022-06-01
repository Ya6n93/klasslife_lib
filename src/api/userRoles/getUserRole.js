import axios from '../../lib/axios'

const getUserRole = async (token, id) => {
  const response = await axios.get(`/user_roles/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUserRole }
