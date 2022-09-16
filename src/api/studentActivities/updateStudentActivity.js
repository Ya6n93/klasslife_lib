import axios from '../../lib/axios'

const updateStudentActivity = async (url, token, studentActivityId, data) => {
  const response = await axios.patch(
    `${url}/student_activities/${studentActivityId}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  return response
}

export { updateStudentActivity }
