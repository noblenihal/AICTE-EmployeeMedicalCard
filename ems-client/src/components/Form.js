import { useState} from 'react'
import Button from "./Button"
import DependentForm from "./DependentForm"
import axios from "axios";
import domain from "./config/index.js"
import EmployeePage from './EmployeePage';
import def from '../images/default.png';
import Dependent from "./Dependent"


const Form = () => {

    const [ name, setName] = useState("");
    const [ dob, setDob]  = useState("");
    const [ designation, setDesignation] = useState("");
    const [ ward, setWard ] = useState("");
    const [ address , setAddress] = useState("");
    const [ mobileNumber, setMobileNumber] = useState("");
    const [ payMatrix, setPayMatrix] = useState("");
    const [ bloodGroup, setBloodGroup] = useState("");
    const [ id, setId] = useState("");
    const [ dependentsInfo, setDependentsInfo] = useState([]);
    const [show, setShow] = useState(false);
    

    
    

    const handleSubmit = async (e) => {
        // const response = await fetch("");
        // const obj = await response.json();
        // const id = obj["id"];
        e.preventDefault(); 

        let data = {
            "employeeName" : name,
            "mobileNumber" : mobileNumber,
            "dateOfBirth" : dob,
            "address" : address,
            "designation" : designation,
            "ward" : ward,
            "bloodGroup" : bloodGroup,
            "payMatrix" : payMatrix,
            "allDependents" : dependentsInfo,
        }   

        const response = await axios.post("http://127.0.0.1:8000/api/employees/", data);  
        
         setId(response.data["recentlyAddedId"])
        console.log(response.data["recentlyAddedId"]);
        console.log(domain.baseUrl)

    }


    const addComponent = () => {
        
        setShow(!show);
        
    }


    return (id!=="")?<EmployeePage id={id} />:
    <div className='form-wrap'>   
    
        <div className="form-head">
            <div className="title">Employee Medical Card</div>
            <div className="subtitle">Please fill the details carefully.</div>
        </div>    
           <div className='container'>
                <form id="contact"  className="employee-form" onSubmit={handleSubmit}>
                    
                    <div className="fields">

                    <label htmlFor="name" className="placeholder" > Name</label>
                    <input id="name" placeholder="Your name" value = {name} type="text" tabIndex="1" required autoFocus onChange={(e) =>setName(e.target.value)} className="input"/>
                    </div>
                    
                        
                    <div className="fields">

                    
                    <label htmlFor="number" className="placeholder" >Mobile No.</label>     
                    <input id="number" placeholder="Your Mobile Number" value = {mobileNumber} type="tel" tabIndex="2" required autoFocus onChange={(e) => setMobileNumber(e.target.value)} className="input"/>
                    
                    </div>

                    <div className="fields">

                    <label htmlFor="dob" className="placeholder" >Date of Birth</label>
                    <input id="dob" placeholder='Your Date of Birth'  value = {dob} type="date" tabIndex="3" required autoFocus onChange={(e) => setDob(e.target.value)} className="input"/>

                    </div>
                    
                    <div className="fields">


                    <label htmlFor="designation" className="placeholder" >Designation</label>  
                    <input id="designation" placeholder='Your Designation' value = {designation} type="text" tabIndex="4" required autoFocus onChange={(e) => setDesignation(e.target.value)}  className="input" />

                    </div>
                    

                    <div className="fields">

                    <label htmlFor="ward" className="placeholder" > Ward</label>
                    <input id="ward"  placeholder="Ward" value = {ward} type="text" tabIndex="5" required autoFocus onChange={(e) => setWard(e.target.value)} className="input"/>

                    </div>
                    

                    <div className="fields">

                    <label htmlFor="address" className="placeholder" >Address</label>    
                    <input id="address" placeholder="Your Complete Address" value = {address} type="text" tabIndex="6" required autoFocus onChange={(e) => setAddress(e.target.value)} className="input"/>

                    </div>
                    
                    <div className="fields">

                    <label htmlFor="paymatrix" className="placeholder" > Pay Matrix </label>  
                    <input id="paymatrix" placeholder="Pay Matrix" value = {payMatrix} type="text" tabIndex="7" required autoFocus onChange={(e) => setPayMatrix(e.target.value)} className="input"/>

                    </div>
                    

                    <div className="fields">

                    <label htmlFor="bloodgroup" className="placeholder"> Blood Group </label>  
                    <input id="bloodgroup" placeholder="Your Blood Group" value = {bloodGroup} type="text" tabIndex="8" required autoFocus onChange={(e) => setBloodGroup(e.target.value)}  className="input"/>

                    </div>
                    
                
                    
                {   
                    (dependentsInfo.length > 0)?
                    <div>

                        <h3 className='dependent-title'>Dependents</h3>
                    
                        <table id="d-table"> 
                            <thead>
                                <tr className="d-tr">
                                    <th className='d-th'>Name</th>
                                    <th className='d-th'>Date of birth</th>
                                    <th className='d-th'>Relation</th>
                                </tr>
                            </thead>

                            <tbody>

                            {

                                dependentsInfo.map((item, i)=>(
                                    <tr  className="d-tr" key={i}>
                                        <Dependent name = {item["name"]} dob={item["dateOfBirth"]} rel={item["relation"]} key={i}/>
                                    </tr>

                                ))
                            }        
                            </tbody>

                        </table>

                    </div>:
                    <h3 className='dependent-title'>Add Dependents</h3>
                                                      
                   
                }    

                
                { (show===true)?
                    
                    <DependentForm onCreate={(dName, dDob, dRel)=>{
                        
                        setDependentsInfo([...dependentsInfo,{
                            "name":dName,
                            "dateOfBirth": dDob,
                            "relation" : dRel,
                        }])}
                    
                        } show={show} setShow={setShow}/> : <Button text="Add Dependents" onClick={addComponent} />
                }
                
                <br />
                
                    <button name="submit" type="submit" id="details-submit" data-submit="...Sending" >Submit</button>

                </form>

                <img src={def} alt="employee" className='emp-img' />

            

           </div> 




        </div>
    
}

export default Form
