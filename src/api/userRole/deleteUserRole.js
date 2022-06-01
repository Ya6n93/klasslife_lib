import axios from 'axios'

async function deleteUserRole(token, id, data) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/user_roles/` + id,
      { headers: { Authorization: `Bearer ${token}` } }, data
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { deleteUserRole }