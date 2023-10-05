import setDataToLocalStorage from '../utility/setDataToLocalStorage';

const Entry = () => {
  const handleEntrySubmit = (e) => {
    e.preventDefault();
    const present = parseInt(e.target.present.value);
    const cost = parseInt(e.target.cost.value);
    const day = parseInt(e.target.day.value);
    const data = {
      day,
      present,
      cost,
    };
    setDataToLocalStorage(data);
  };
  return (
    <div className="h-[80vh] w-full bg-[17B3C1]">
      <h1>Mir Mossarof Hossain Hall</h1>
      <div>
        <form onSubmit={handleEntrySubmit}>
          <div>
            <label htmlFor="present" className="Text text-4xl">
              Present
            </label>
            <input
              type="number"
              name="present"
              id="present"
              required
              placeholder="Mill On Border"
            />
          </div>
          <div>
            <label htmlFor="cost" className="Text text-4xl">
              Cost
            </label>
            <input
              type="number"
              name="cost"
              id="cost"
              required
              placeholder="Enter Amount here...."
            />
          </div>
          <div>
            <label htmlFor="day" className="Text text-4xl">
              Day
            </label>
            <input
              type="number"
              name="day"
              id="day"
              required
              placeholder="Enter Day here.."
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Entry;
