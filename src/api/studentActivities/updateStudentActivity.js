import axios from '../../lib/axios'

const updateStudentActivity = async (token, studentActivityId, data) => {
  const response = await axios.put(
    `/student_activities/${studentActivityId}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  return response
}

export { updateStudentActivity }
