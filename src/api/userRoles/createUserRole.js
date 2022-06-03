import axios from '../../lib/axios'

const createUserRole = async (url, token, userRole) => {
  const response = await axios.post(`${url}/user_roles`, userRole, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createUserRole }
