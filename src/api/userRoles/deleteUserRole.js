import axios from '../../lib/axios'

const deleteUserRole = async (token, userRoleId) => {
  const response = await axios.delete(`/user_roles/${userRoleId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteUserRole }
