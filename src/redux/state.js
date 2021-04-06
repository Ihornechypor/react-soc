let state = {
  messagesPage: {
    messagesData: [
      { id: 1, name: "ihor" },
      { id: 2, name: "Roman" },
      { id: 3, name: "Petro" },
    ],
    messagesText: [
      { id: 1, text: "hi" },
      { id: 2, text: "hello" },
      { id: 3, text: "pa" },
    ],
  },
  profilePage: {
    userPosts: [
      { id: 1, text: "hi", likes: 3 },
      { id: 2, text: "hello", likes: 1 },
    ],
  },
};

export default state;

export const addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 3,
    text: postMessage,
    likes: 0,
  };
  console.log(newPost);

  state.profilePage.userPosts.push(newPost);
  debugger;
};
