import axios from '../../lib/axios'

const createStudentActivity = async (token, data) => {
  const response = await axios.post('/student_activities', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createStudentActivity }
