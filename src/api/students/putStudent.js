import axios from 'axios'


const putStudent = async (studentId, data, token) => {
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/students/${studentId}`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res
}

export { putStudent }
