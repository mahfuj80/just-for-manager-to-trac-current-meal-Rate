const handleDelete = (day) => {
  const previousStoredDataString = localStorage.getItem('dailyEntry');
  const previousStoredData = JSON.parse(previousStoredDataString);
  const dataAfterDeleted = previousStoredData.filter(
    (data) => data.day !== day
  );
  const stringDataAfterDeleted = JSON.stringify(dataAfterDeleted);
  localStorage.setItem('dailyEntry', stringDataAfterDeleted);
  location.reload();
};

export default handleDelete;
