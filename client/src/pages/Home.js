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

<div class="content">
  <div class="content__container">
    <p class="content__container__text">
      
    </p>
    
    <ul class="content__container__list">
      <li class="content__container__list__item">Team Collaboration</li>
      <li class="content__container__list__item">Plan Your Projects</li>
      <li class="content__container__list__item">Meet your Deadlines</li>
      <li class="content__container__list__item">Get Organized!</li>
    </ul>
  </div>
</div>
<div>
  <p className= "what-is-tikkitt ">What is Tikkitt?</p><br>
  </br>
  <p className= "what-is-tikkitt-body">Finally, a simple and easy way for you to assign tasks - or "tikkitts" to other employees or group members. Tikkitt allows users to create tasks and monitor the working status of each project assigned, through a simple and easy to use platform. Try it now!</p>
<section className= "container"> 
    <button type= "button">Learn More</button><br></br>
</section>
</div>

            
      </div>
    </main>
  );
};

export default Home;
