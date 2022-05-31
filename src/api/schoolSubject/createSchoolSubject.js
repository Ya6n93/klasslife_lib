import axios from 'axios'

async function createSchoolSubject(token, data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/school_subjects` + data,
      { headers: { Authorization: `Bearer ${token}` }}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { createSchoolSubject }