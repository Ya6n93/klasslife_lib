import axios from '../../lib/axios'

const getUserRoles = async (token) => {
  const response = await axios.get('/user_roles', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUserRoles }
