import React from "react";

const taskReducer = (task, action) => {
  switch (action.type) {
    case "Create": {
      return [
        ...task,
        {
          title: action.title,
          description: action.description,
        },
      ];
    }
    case "Delete": {
      return task.filter((item, index) => index !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default taskReducer;
