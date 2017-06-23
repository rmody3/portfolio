
export const updateView = (view) => {
  return {
    type: "UPDATE_VIEW",
    payload: view
  }
}

export const updateProjectDetails = (projectDetails) => {
  return {
    type: "UPDATE_PROJECT_DETAILS",
    payload: projectDetails
  }
}
