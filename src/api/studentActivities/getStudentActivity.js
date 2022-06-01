import axios from '../../lib/axios'

async function getStudentActivity(token, activityId) {
  const response = await axios.get(`/student_activities/${activityId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudentActivity }
