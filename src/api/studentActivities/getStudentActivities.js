import axios from '../../lib/axios'

const getStudentActivities = async (url, token) => {
  const response = await axios.get(`${url}/student_activities`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudentActivities }
