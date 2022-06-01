import axios from '../../lib/axios'

const getClassroom = async (token, classroomId) => {
  const response = await axios.get(`/classrooms/${classroomId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getClassroom }
