import React from 'react';
import './Home.scss';
import projectM from '../images/projectM.png'
import colab from '../images/colab.png'
import Assign from '../images/Assign.png'
import 'animate.css';
import Dennis from '../images/dennis.png'
import Abigail from '../images/abigail.png'
import Jessica from '../images/jessica.png'
import Joshua from '../images/Joshua.png'
import {
  faSass,
  faNodeJs,
  faBootstrap,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons';
import Snowfall from 'react-snowfall';




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
      {/* next segment; */}
        <div className='sect1'>
          <div className='opener col-6'>
          <img src={projectM} alt="Logo" className=""  />
          </div>
          <div className='text1 col-6'>
            <h1> "Tikkitt is a simple project management application!"</h1>

          </div>
        </div>
        <div className='sect2 row'>
          <div className='text2 col-6'>
            <h1> "Collaboration with teams keeps you organized and up to date with your tasks!"</h1>

          </div>
          <div className='opener2 col-6'>
            <img src={colab} alt="Logo" className=""  />
          </div>
          
        </div>

        <div className='sect3 row'>
        <div className='opener3 col-3'>
            <img src={Assign} alt="Logo" className=""  />
          </div>
            <div className="typewriter ">
              
              <h1>Assign Tikkitt's with due dates & notifications!</h1>
            </div>
          
        </div>

        <div className='sect4 flex-row'>
        <div className='Text4 col-12'><h1>Meet Our Development Team!</h1></div>
        <div className='flex DevCards'>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Dennis} alt="dennis head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Dennis Hickox</span> <span className="idd">frozzel@me.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer</span></div> 
                            <div className="text mt-3">Project Contributions:<br /><br />MongoDb, Server and React setup. UI animations. Create and Read functions from client side to DB. React Beautiful Dnd deployment! </div> 
                             </div></div>
            </div>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Joshua} alt="joshua head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Joshua Adam</span> <span className="idd">sales@carstock.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer, Strategic Partner & Investor</span></div> 
                            <div className="text mt-3">Project Contributions:<br /><br />CRUD operations + GraphQL! Resolvers, typedefs, mutations, live chat support implementation, .com deployment! </div> 
                             </div></div>
            </div>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Jessica} alt="dennis head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Jessica Ciak</span> <span className="idd">jesciak@yahoo.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer</span></div> 

                            <div className="text mt-3">Project Contributions:<br /><br />Apollo GraphQL query and mutation operation testing and CRUD implementation!  </div> 

                             </div></div>
            </div>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Abigail} alt="dennis head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Abigail LeConte</span> <span className="idd">aeleconte21@gmail.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer</span></div> 
                            <div className="text mt-3">Project Contributions:<br /><br />Wrote out README file & connected AWS email server allowing email notifications to generate within the application! </div> 
                             </div></div>
            </div>

        </div>


        </div>

        <div className='sect5 flex-row'>
        <div className='Text4 col-12'><h1>Technologies Used</h1></div>
        <FontAwesomeIcon className="icons" icon={faReact} color="#94D3AC" />
        <FontAwesomeIcon className="icons" icon={faBootstrap} color="#94D3AC" />
        <FontAwesomeIcon className="icons" icon={faSass} color="#94D3AC" />
        <FontAwesomeIcon className="icons" icon={faNodeJs} color="#94D3AC" />
        <div className='Text4 col-12'><h1>& many more!</h1></div>
        </div>

        <div className='sect6 flex-row'>
        <div className="App-logo">
          <div> <FontAwesomeIcon className='App-logo ' icon={faRocket} color="#FFE1E1" /></div>
          <Snowfall color="#94D3AC" style={{opacity: '.4' }} snowflakeCount={300}/>
          </div>
          <h1 className='text6'>THE FUTURE IS OPEN WIDE!</h1>
          <div className="content">
  <div className="content__container">
    <p className="content__container__text">
     
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item">File Sharing</li>
      <li className="content__container__list__item">SMS Notifications</li>
      <li className="content__container__list__item">Built In Chat Rooms</li>
      <li className="content__container__list__item">Calendar Integration!</li>
    </ul>
  </div>
</div>






        </div>

        <div className='sect7 flex-row'>
        <h1>&copy; Tikkitt is ment for educational purposes only, No reproduction permitted.</h1>
        <a href="https://pngtree.com/freepng/linear-color-project-cooperation-global-strategy-business-cooperation-ui-design_4867105.html"><h1>&copy; pngtree author: 云川  images used on site are not for commercial use without purchase.</h1></a>

      

        </div>
    </main>
  );
};

export default Home;