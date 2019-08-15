const redirect = (path) => {
  window.location.hash = `/${path}`;
};


export { redirect };
