import React from 'react'; 
import { useState } from 'react';
import Button from "./Button";
import def from '../images/default.jpeg'

const DependentForm = ({onCreate, show, setShow}) => { 

  const [dname, setdName] = useState("");
  const [dDob, setdDob] = useState("");
  const [dRel, setdRel] = useState("");
  const [dImg, setdImg] = useState(null);
  const [imgdepData, setImgDepData] = useState(null);
  
  const handleDep = (e) => {


      e.preventDefault()
      if(dname!=="" && dDob!=="" && dRel!=="" ){
        onCreate(dname, dDob, dRel, dImg);
        setShow(!show);
      }
      else{
        alert("Please fill complete dependent information!")
      }
      
  }

  return ( 
    
    <div className='d-container'>
      <div className='dependent-form'>

        <div className='d-form'>


          <label htmlFor="dname" className="placeholder">Name of Dependent</label>
            <input id="dname" value={dname} placeholder="Dependent's Name" className="input" onChange={(e) => setdName(e.target.value)} type="text" required/>
          
          <label htmlFor="dDob" className="placeholder">Date of Birth</label>
            <input id="dDob" value={dDob} placeholder="Dependent's date of birth" className="input" onChange={(e) => setdDob(e.target.value)} type="date" required/>
          
          <label htmlFor="drel" className="placeholder">Relation</label>
            <input id="drel" value={dRel} className="input" placeholder="Relation with Employee" onChange={(e) => setdRel(e.target.value)} type="text" required/>


          <label htmlFor="emp-image" className="placeholder" >Upload your Image</label>     
          <input id="emp-img" type="file" tabIndex="9" onChange={(e)=> {
                        setdImg(e.target.files[0])
                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                            setImgDepData(reader.result);
                        });
                        reader.readAsDataURL(e.target.files[0]);
                        }
                    } required autoFocus className="input input-img"/>
  
        
        </div>

        
        
  
        {

        (imgdepData===null)?<img src={def} alt="dependent" className='emp-img'/>:<img src={imgdepData} alt="dependent" className='emp-img'/>

        }


      </div> 
      <Button text="Add" onClick={handleDep} />

    </div>
    
  ); 
  
}; 

export default DependentForm;