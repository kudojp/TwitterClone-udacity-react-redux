import { combineReducers } from 'redux'
import authUser from './authed_user'
import users from './users'
import tweets from './tweets'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authUser,
  users,
  tweets,
  loadingBar: loadingBarReducer
})
