import axios from 'axios'

async function createGrade(token, data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/grades`,
      { headers: { Authorization: `Bearer ${token}` }, data}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { createGrade }