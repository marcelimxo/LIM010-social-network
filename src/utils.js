const redirect = (path = '') => {
  window.location.hash = `/${path}`;
};

const template = (view) => {
  const root = document.getElementById('root');
  root.innerHTML = view;
};


export { redirect, template };
