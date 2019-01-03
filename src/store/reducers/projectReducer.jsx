const initState = {
  projects: [
    {
      id: 1,
      title: "help me find the keys",
      content: "lost them while going there"
    },
    {
      id: 2,
      title: "binge watch react",
      content: "this stuff is like netflix, want to do it with me?"
    },
    {
      id: 3,
      title: "build visuals",
      content: "learn nivo library to build data visulizations"
    },
    {
      id: 4,
      title: "finish blogu",
      content: "finish express backend of blogu api"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
