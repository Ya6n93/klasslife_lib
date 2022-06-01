import axios from '../../lib/axios'

const deleteClassroom = async (token, classroomId) => {
  const response = await axios.delete(`/classrooms/${classroomId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteClassroom }
