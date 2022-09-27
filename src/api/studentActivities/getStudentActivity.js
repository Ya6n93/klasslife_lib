import axios from '../../lib/axios'

const getStudentActivity = async (url, activityId) => {
  const response = await axios.get(`${url}/student_activities/${activityId}`)

  return response
}

export { getStudentActivity }
