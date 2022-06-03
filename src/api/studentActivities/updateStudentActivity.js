import axios from '../../lib/axios'

const updateStudentActivity = async (url, token, studentActivityId, data) => {
  const response = await axios.put(
    `${url}/student_activities/${studentActivityId}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  return response
}

export { updateStudentActivity }
