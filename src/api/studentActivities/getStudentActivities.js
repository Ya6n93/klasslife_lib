import axios from '../../lib/axios'

async function getStudentActivities(token) {
  const response = await axios.get('/student_activities', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudentActivities }
