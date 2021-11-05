const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
      // {id: 1, followed: false, fullname: 'Rustam', status: 'I am a boss', location: {city: Saint-P}, country: {Russia} },
      // {id: 2, followed: true, fullname: 'Andrey', status: 'I am a employe', location: {city: Kiev}, country: {Ukraine} },
      // {id: 3, followed: false, fullname: 'Dimych', status: 'I am a employe', location: {city: Minsk}, country: {Belarus} }
    ],
    
};

const usersReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case FOLLOW:
        return { 
          ...state,
          users: state.users.map( u =>  {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
              return u;
          })
        }
    case UNFOLLOW:
        return { 
          ...state,
          users: state.users.map( u =>  {
            if (u.id === action.userId) {
              return {...u, unfollowed: true}
            }
              return u;
          })
        }
    case SET_USERS: {
      return { ...state, users: [ ...state.users, ...action.users ]}
    }

      default:
          return state;
  }
}
   

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;