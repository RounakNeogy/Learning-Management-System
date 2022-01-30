import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink,useHistory } from 'react-router-dom'

const Learn = () => {

    const history = useHistory();
  useEffect(() =>{
    fetch('/learn' ,{
        method: "GET",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
    }).then((res) => {
        if(res.status !== 200){
            const error =new Error(res.error);
            throw error;
        }
        else{
          history.push('/learn',{replace:true});
        }
    }).catch((err) => {
        history.push('/signin',{replace:true});
        console.log(err);
    })
});

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Harry James</div>
              <div className="card-body">
                <h5 className="card-title">DataBase Management System</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Emma</div>
              <div className="card-body">
                <h5 className="card-title">DataStructure and Algorithms</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Natalie</div>
              <div className="card-body">
                <h5 className="card-title">Computer Organisation and Architecture</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Hazel</div>
              <div className="card-body">
                <h5 className="card-title">Object Oriented Programing</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Swapnil</div>
              <div className="card-body">
                <h5 className="card-title">Fullstack Web Development</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Kennedy</div>
              <div className="card-body">
                <h5 className="card-title">Microprocessors and Mircrocontrollers</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Sarah</div>
              <div className="card-body">
                <h5 className="card-title">Mental heath and Physical Education</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white mb-3">
              <div className="card-header">Prof. Genney</div>
              <div className="card-body">
                <h5 className="card-title">Graph Algorithm: Implemtation</h5>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Learn
