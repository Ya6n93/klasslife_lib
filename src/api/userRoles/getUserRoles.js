import axios from '../../lib/axios'

const getUserRoles = async (url, token) => {
  const response = await axios.get(`${url}/user_roles`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUserRoles }
