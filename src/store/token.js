import { createStore } from 'redux'

const Login = 'Login'
const Logout = 'Logout'

const reducer = (state = '', action) => {
  switch (action.type) {
    case Login:
      return action.token
    case Logout:
      return ''
    default:
      return state
  }
}

const token = createStore(reducer)

export default token
