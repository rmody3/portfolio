
export default function rootReducer(state = {view: "about", projectDetails: null}, action) {
  console.log(action)
  switch(action.type) {
    case "UPDATE_VIEW":
      return Object.assign({}, state, {view: action.payload});
    case "UPDATE_PROJECT_DETAILS":
      return Object.assign({}, state, {projectDetails: action.payload});
    default:
      console.log(state)
      return state;
  }
};
