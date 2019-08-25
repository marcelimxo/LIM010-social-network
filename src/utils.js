const redirect = (path = '') => {
  window.location.hash = `/${path}`;
};

const template = (view) => {
  const root = document.getElementById('root');
  root.innerHTML = view;
};

const templatePost = (view) => {
  const post = document.getElementById('post');
  post.appendChild(view);
};


export { redirect, template, templatePost };
