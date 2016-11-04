import { combineReducers } from 'redux'
import { ACCOUNTS } from '../Action'

const postsByReddit = (state={}, action) => {
  switch (action.type) {
    case ACCOUNTS:
      return {
        ['results']: {
          type: action.type,
          accounts: action.results
        }
      }  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByReddit
})

export default rootReducer
