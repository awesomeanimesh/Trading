import { useEffect, useState } from "react";
import "./dashboard.css";

interface PortfolioItem {
  id: string;
  name: string;
  value: number;
  change: number;
  avatar: string;
}
function Dashboard() {
  const [myPortfolio, setMyPortFolio] = useState<PortfolioItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const displayData = myPortfolio.slice(startIndex, startIndex + 3);

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 3, myPortfolio.length - 1)
    );
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };
  useEffect(() => {
    apiCall();
  }, []);
  const url =
    "https://65a62ac374cf4207b4ef6244.mockapi.io/myportfolio/sharemarket";
  const apiCall = () => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => {
        setMyPortFolio(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="dashboard">
      <div className="portfolio">
        <div className="pValueTitle">
          <div>Portfolio value</div>
          <div>Date filter</div>
        </div>
        <div className="pData">
          <div className="pValue">
            <div>
              <div className="pGrowth">12.45%</div>
              <div>Net Portfolio Growth</div>
            </div>
          </div>
          <div>
            <div className="pAmount">54673.55</div>
            <div>
              <span className="pAmountCurrent">+547.55</span>
              Today
            </div>
          </div>
        </div>
      </div>
      <div className="myPortfolioWrapper">
        <div>Your Portfolio</div>
        {/* {myPortfolio &&
          myPortfolio.map((data, index) => {
            return <div key={data?.id}>{data.name}</div>;
          })} */}
        <div>
          <ul className="myPortfolioData">
            <button onClick={handlePrevClick} disabled={startIndex === 0}>
              Previous
            </button>
            {displayData.map((data) => (
              <li key={data.id}>
                <div className="grid-container">
                  <div className="grid-item">{data.name}</div>
                  <div className="grid-item">
                    <img src={data.avatar} className="companyImg"></img>
                  </div>
                  <div className="grid-item">{data.value}</div>

                  <div className="grid-item">{data.change}%</div>
                </div>
              </li>
            ))}
            <button
              onClick={handleNextClick}
              disabled={startIndex + 3 >= myPortfolio.length}
            >
              Next
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
