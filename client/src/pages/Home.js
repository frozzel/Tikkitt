import React from 'react';
import './Home.scss';
import projectM from '../images/projectM.png'
import colab from '../images/colab.png'
import Assign from '../images/Assign.png'
import 'animate.css';





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
<div>
  <p className= "what-is-tikkitt ">What is Tikkitt?</p><br>
  </br>
  <p className= "what-is-tikkitt-body">Finally, a simple and easy way for you to assign tasks - or "Tikkitts" to other employees or group members. Tikkitt allows users to create tasks and monitor the working status of each project assigned, through a simple and easy to use platform. Try it now!</p>
<section className= "container"> 
    <button type= "button">Learn More</button><br></br>
</section>
</div>
<div>
  <p className= "how-does-it-work ">How does it work?</p><br>
  </br>
  <p className= "how-does-it-work-body">Create a user accout for free! Start by creating a new Tikkitt with your project info, and assigning it to another user. You can monitor the working status and see if the Tikkit has been completed. Once done, you can archive and move on to the next!</p>
<section className= "container"> 
    <button type= "button">Try Now</button><br></br>
</section>
</div>
<div>
  <p className= "help-my-business">How can Tikkitt help my business?</p><br>
  </br>
  <p className= "help-my-business-body">Get more done! Finally an easy way to create projects with completely customizable tasks, and the ability to assign them to specific individuals. Tikkitt allows you to track the on-going process of your assigments, while also allowing you to store and archive them once completed. </p>
<section className= "container"> 
    <button type= "button">Testimonials</button><br></br>
</section>
</div>   
      </div>
      {/* next segment; */}
        <div className='sect1'>
          <div className='opener col-6'>
          <img src={projectM} alt="Logo" className=""  />
          </div>
          <div className='text1 col-6'>
            <h1> "Tikkit is a simple project management application!"</h1>

          </div>
        </div>
        <div className='sect2 row'>
          <div className='text2 col-6'>
            <h1> "Collaberation with teams keeps you organized and up to date with every step!"</h1>

          </div>
          <div className='opener2 col-6'>
            <img src={colab} alt="Logo" className=""  />
          </div>
          
        </div>

        <div className='sect3 row'>
        <div className='opener3 col-3'>
            <img src={Assign} alt="Logo" className=""  />
          </div>
            <div class="typewriter ">
              
              <h1>Assign Tikkett's with due dates & notifications!</h1>
            </div>
          
        </div>

    </main>
  );
};

export default Home;
