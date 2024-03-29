import axios from '../../lib/axios'

const updateStudentActivity = async (url, studentActivityId, data) => {
  const response = await axios.put(
    `${url}/update/student_activities/${studentActivityId}`,
    data
  )

  return response
}

export { updateStudentActivity }
