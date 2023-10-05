const handleMainFormSubmit = (mainFormData) => {
  console.log(mainFormData);
  const mainFormDataString = JSON.stringify(mainFormData);
  localStorage.setItem('homePageData', mainFormDataString);
};

export default handleMainFormSubmit;
