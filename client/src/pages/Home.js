import React from 'react';
import './Home.scss';
// import logo from '../components/Header/logo.svg'





const Home = () => {
  


  return (
    <main>
      <div className=" main">
      {/* <img src={logo} alt="Logo" className="opener col-12"  /> */}
      <div className="container">
  <div className="row">
    <div className="col-md-12 text-center ">
      <h3 className="animate-charcter"> Tikkitt</h3>
    </div>
  </div>
</div>

<div className="content">
  <div className="content__container">
    <p className="content__container__text">
      
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item">Team Collaboration</li>
      <li className="content__container__list__item">Plan Your Projects</li>
      <li className="content__container__list__item">Meet your Deadlines</li>
      <li className="content__container__list__item">Get Organized!</li>
    </ul>
  </div>
</div>


            
      </div>
    </main>
  );
};

export default Home;
