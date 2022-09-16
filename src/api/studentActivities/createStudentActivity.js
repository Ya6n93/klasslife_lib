import axios from '../../lib/axios'

const createStudentActivity = async (url, data) => {
  const response = await axios.post(`${url}/student_activities`, data)

  return response
}

export { createStudentActivity }
