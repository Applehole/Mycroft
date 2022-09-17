// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
export const CHANGE = 'COUNT/CHANGE'

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case CHANGE:
      return { count: action.number }
    default:
      return state
  }
}

export default counter
