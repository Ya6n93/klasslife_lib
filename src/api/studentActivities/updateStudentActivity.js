import axios from 'axios'


const updateStudentActivity = async (studentActivityId, data, token) => {
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/student_activities/${studentActivityId}`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res
}

export { updateStudentActivity }
