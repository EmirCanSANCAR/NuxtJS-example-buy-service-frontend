export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/service-providers')
  } else {
    return redirect('/login')
  }
}
