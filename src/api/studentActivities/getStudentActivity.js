import axios from '../../lib/axios'

const getStudentActivity = async (url, token, activityId) => {
  const response = await axios.get(`${url}/student_activities/${activityId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getStudentActivity }
