
export default function headerReducer(state = {view: "home"}, action) {
  console.log(action)
  switch(action.type) {
    case "UPDATE_VIEW":
      return {view: action.payload};
    default:
      console.log(state)
      return state;
  }
};
