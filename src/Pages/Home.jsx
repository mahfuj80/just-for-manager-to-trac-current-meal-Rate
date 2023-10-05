import { useEffect, useState } from 'react';
import handleMainFormSubmit from '../utility/handleMainFormSubmit';

const Home = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [totalBorder, setTotalBorder] = useState(0);
  const [totalMeal, setTotalMeal] = useState(0);
  const [totalSpendForMeal, setTotalSpendForMeal] = useState(0);
  const [milRate, setMilRate] = useState(0);
  const [songsthapon, setSongsthapon] = useState(0);
  const [individualSongsthapon, setIndividualSongsthapon] = useState(0);
  const [regularBorderNeed, setRegularBorderNeed] = useState(0);
  useEffect(() => {
    const dailyEntryData = JSON.parse(localStorage.getItem('dailyEntry'));
    const homePageData = JSON.parse(localStorage.getItem('homePageData'));
    setSongsthapon(homePageData.songsthapon);
    setTotalBorder(homePageData.totalBorder);
    const perPersonSongsthapon = songsthapon / totalBorder;
    setIndividualSongsthapon(perPersonSongsthapon.toFixed(2));
    // Sum Total Shopping Cost
    const totalSpendForShoppingArray = dailyEntryData.map((item) => item.cost);
    const totalShopping = totalSpendForShoppingArray.reduce((a, c) => a + c, 0);
    setTotalSpendForMeal(totalShopping);
    // Sum Total Meal
    const totalMealPerDayArray = dailyEntryData.map((item) => item.present);
    const totalMeal = totalMealPerDayArray.reduce((a, c) => a + c, 0);
    setTotalMeal(totalMeal);
    // Calculation Mill Rate
    const mealRate = totalShopping / totalMeal;
    setMilRate(mealRate);
    // Calculate Regular Border Cost
    const regularBorderCost =
      individualSongsthapon +
      milRate * dailyEntryData[dailyEntryData.length - 1]?.day;
    // const fixedRegularBorderCost = regularBorderCost.toFixed(2);
    setRegularBorderNeed(regularBorderCost);
  }, [individualSongsthapon, milRate, songsthapon, totalBorder]);
  const handleMainForm = (e) => {
    e.preventDefault();
    const totalBorder = parseInt(e.target.totalBorder.value);
    const songsthapon = parseInt(e.target.songsthapon.value);
    const mainFormValue = {
      songsthapon,
      totalBorder,
    };

    handleMainFormSubmit(mainFormValue);
  };
  return (
    <>
      <div className="h-[100vh] container mx-auto text-center">
        <h1>This is home</h1>
        <div>
          <h2>Total Border: {totalBorder}</h2>
          <h2>Total Songsthapon: {songsthapon}</h2>
          <h2>Individual Songsthapon: {individualSongsthapon}</h2>
          <h2>Total Shopping Cost: {totalSpendForMeal}</h2>
          <h2>Total Meal:{totalMeal}</h2>
          <h2>Meal Rate:{milRate}</h2>
          <h2>Regular Border Cost:{regularBorderNeed}</h2>
        </div>
        <button
          onClick={() => setDisplayForm(!displayForm)}
          className="btn btn-ghost"
        >
          Show Form
        </button>
        {displayForm && (
          <div>
            <form onSubmit={handleMainForm}>
              <div>
                <label htmlFor="totalBorder">Total Border</label>
                <input
                  type="number"
                  name="totalBorder"
                  id="totalBorder"
                  required
                  placeholder="Total Border..."
                />
              </div>
              <div>
                <label htmlFor="songsthapon">Total Songsthapon Fees</label>
                <input
                  type="number"
                  name="songsthapon"
                  id="songsthapon"
                  required
                  placeholder="Songsthapon"
                />
              </div>
              <input className="btn btn-ghost" type="submit" value="Submit" />
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
