import axios from '../../lib/axios'

const deleteUserRole = async (url, token, userRoleId) => {
  const response = await axios.delete(`${url}/user_roles/${userRoleId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteUserRole }
