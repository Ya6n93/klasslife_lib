import axios from '../../lib/axios'

async function getSchoolSubject(token, id) {
  const response = await axios.get(`/school_subjects/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getSchoolSubject }
