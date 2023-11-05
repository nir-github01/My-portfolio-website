import { PortfolioList } from "../components/PortfolioList";

const Portfolio = () => {
  let Portfolios = PortfolioList.map((portfolio) => {
    return (
      <div key={portfolio.id} className="cardImg">
        <p className="titlehead">Check out some of my work right here</p>
        <img
          className="portfolioImg"
          src={portfolio.titleImg}
          alt="screenshot"
        />
        <div className="cardBtn">
          <button className="dcbtn">Demo</button>
          <button className="dcbtn">Code</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="portfolioContatiner">
        <div className="portfolioheading">
          <h1 >Portfolio</h1>
        </div>
        <div className="card">{Portfolios}</div>
      </div>
    </div>
  );
};

export default Portfolio;
