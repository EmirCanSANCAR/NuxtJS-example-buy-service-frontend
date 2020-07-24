export const state = () => {
  return {
    auth: null,
  }
}
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}
