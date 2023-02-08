import React from "react";
import './homestyle.css';  


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/image/bg.png" class="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEWsssssssssssssss SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE LATEST TRENDS</p>
          </div>
          <div className="content-main">
          <button>CLICK ME<i className='fas fa-long-arrow-alt-right' ></i>
    </button>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
