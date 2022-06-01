import axios from 'axios'

async function getUserRole(token, id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user_roles/` + id,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getUserRole }