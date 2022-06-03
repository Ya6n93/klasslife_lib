import axios from '../../lib/axios'

const deleteClassroom = async (url, token, classroomId) => {
  const response = await axios.delete(`${url}/classrooms/${classroomId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteClassroom }
