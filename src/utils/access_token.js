const setAccessToken = (token) => {
  localStorage.setItem('access_token', token)
}

const getAccessToken = () => localStorage.getItem('access_token')

export { setAccessToken, getAccessToken }
