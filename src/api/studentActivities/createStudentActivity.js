import axios from '../../lib/axios'

const createStudentActivity = async (url, token, data) => {
  const response = await axios.post(`${url}/student_activities`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createStudentActivity }
