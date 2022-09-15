export function validEmail(email) {
  const regExp = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9\.kr]+/g
  return regExp.test(email)
}
