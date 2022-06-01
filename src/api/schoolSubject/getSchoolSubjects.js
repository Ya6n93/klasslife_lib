import axios from '../../lib/axios'

async function getSchoolSubjects(token) {
  const response = await axios.get('/school_subjects', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
