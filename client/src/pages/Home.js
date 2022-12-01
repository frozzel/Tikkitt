import React from 'react';
import './Home.scss';
import projectM from '../images/projectM.png'
import colab from '../images/colab.png'
import Assign from '../images/Assign.png'
import 'animate.css';
import Dennis from '../images/dennis.png'





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
                        {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">1069 <span className="follow">Followers</span></span> </div>  */}
                          {/* <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>  */}
                            <div className="text mt-3">Project Contributions:<br /><br />MongoDb, Server and React setup. UI animations. Create and Read functions from client side to DB. React Beautiful Dnd deployment! </div> 
                             </div></div>
            </div>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Dennis} alt="dennis head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Dennis Hickox</span> <span className="idd">frozzel@me.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer</span></div> 
                        {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">1069 <span className="follow">Followers</span></span> </div>  */}
                          {/* <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>  */}
                            <div className="text mt-3">Project Contributions:<br /><br />MongoDb, Server and React setup. UI animations. Create and Read functions from client side to DB. React Beautiful Dnd deployment! </div> 
                             </div></div>
            </div>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Dennis} alt="dennis head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Dennis Hickox</span> <span className="idd">frozzel@me.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer</span></div> 
                        {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">1069 <span className="follow">Followers</span></span> </div>  */}
                          {/* <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>  */}
                            <div className="text mt-3">Project Contributions:<br /><br />MongoDb, Server and React setup. UI animations. Create and Read functions from client side to DB. React Beautiful Dnd deployment! </div> 
                             </div></div>
            </div>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div className="card p-4"> 
              <div className=" image d-flex flex-column justify-content-center align-items-center">   
                <button className="btn btn-secondary"> 
                  <img src={Dennis} alt="dennis head shot"height="100" width="100" />  
                    </button> <span className="name mt-3">Dennis Hickox</span> <span className="idd">frozzel@me.com</span> 
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">MERN Developer</span></div> 
                        {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">1069 <span className="follow">Followers</span></span> </div>  */}
                          {/* <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>  */}
                            <div className="text mt-3">Project Contributions:<br /><br />MongoDb, Server and React setup. UI animations. Create and Read functions from client side to DB. React Beautiful Dnd deployment! </div> 
                             </div></div>
            </div>

        </div>


        </div>

    </main>
  );
};

export default Home;