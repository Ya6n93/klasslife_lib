import axios from '../../lib/axios'

const createUserRole = async (token, userRole) => {
  const response = await axios.post('/user_roles', userRole, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createUserRole }
