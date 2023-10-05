import { useEffect, useState } from 'react';
import handleDelete from '../utility/handleDelete';

const Details = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataString = localStorage.getItem('dailyEntry');
    const data = JSON.parse(dataString);
    setData(data);
  }, []);
  return (
    <div className="min-h-screen">
      {data.map((details) => (
        <div className="flex justify-around mb-2 border-b" key={details.day}>
          <div>Day:{details.day}</div>
          <div>Preset:{details.present}</div>
          <div>Cost:{details.cost}</div>
          <div>
            <button onClick={() => handleDelete(details.day)} className="btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
