import axios from 'axios'


const createStudentActivity = async (data, token) => {
  const { res } = await axios.post(
    `${process.env.REACT_APP_API_URL}/student_activities`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res
}

export { createStudentActivity }
