import axios from 'axios'


async function getStudent(studentId) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/students/${studentId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getStudent }
