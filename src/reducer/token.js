const Login = 'TOKEN/LOGIN'
const Logout = 'TOKEN/LOGOUT'

const token = (state = '', action) => {
  switch (action.type) {
    case Login:
      return action.token
    case Logout:
      return ''
    default:
      return state
  }
}

export default token
