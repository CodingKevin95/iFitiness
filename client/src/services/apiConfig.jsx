let apiUrl

const apiUrls = {
  production: 'https://git.heroku.com/fierce-lake-31754.git',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default api