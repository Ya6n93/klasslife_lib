import axios from 'axios'

async function getUserRoles(token) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user_roles`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getUserRoles }