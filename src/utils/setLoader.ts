const showLoader = () => {
  document
    .querySelector('.loader-container')
    ?.classList.add('loader-container_show');
};
const hideLoader = () => {
  document
    .querySelector('.loader-container')
    ?.classList.remove('loader-container_show');
};

export { showLoader, hideLoader };
