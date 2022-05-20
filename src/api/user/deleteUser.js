import axios from 'axios'


async function deleteUser(token) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/users`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { deleteUser }