// a reducer takes in two things

// 1. the action

// 2 copy of current state

function posts(action, state = []) {
  console.log(state, action);
  return state;
}

export default posts;
