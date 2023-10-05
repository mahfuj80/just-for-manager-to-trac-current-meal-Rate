const setDataToLocalStorage = (data) => {
  const getPreviousDataFromLocalStorage = () => {
    const previousData = JSON.parse(localStorage.getItem('dailyEntry'));
    return previousData || []; // Return an empty array if no previous data
  };

  const setPresentAndPreviousDataToLocalStorage = () => {
    const previousData = getPreviousDataFromLocalStorage();
    const alreadyStoredDate = previousData.filter(
      (singleItem) => singleItem.day === data.day
    );
    console.log(alreadyStoredDate);
    if (alreadyStoredDate.length === 0) {
      previousData.push(data);
    } else {
      return alert('already stored data');
    }

    // Step 1: Convert the updated array to a JSON string
    const updatedDataString = JSON.stringify(previousData);

    // Step 2: Store the updated JSON string in local storage
    localStorage.setItem('dailyEntry', updatedDataString);
    // console.log(updatedDataString);
  };

  setPresentAndPreviousDataToLocalStorage();
};

export default setDataToLocalStorage;
