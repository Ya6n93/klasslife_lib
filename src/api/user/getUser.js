import axios from 'axios'

async function getUser(token, id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/` + id,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getUser }