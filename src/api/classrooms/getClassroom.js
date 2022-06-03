import axios from '../../lib/axios'

const getClassroom = async (url, token, classroomId) => {
  const response = await axios.get(`${url}/classrooms/${classroomId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getClassroom }
