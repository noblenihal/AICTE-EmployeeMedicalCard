import React from 'react';
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const EmployeeDetails = ({match}) => {


    const [empData, setEmpData] = useState({});
 
    const [loading, setLoading] = useState(true);
    let params = useParams();



    useEffect(() => {
        getEmployeeData();
    }, [])


    let getEmployeeData = async () => {

        let response = await axios.get(`/api/employee/${params.id}/`);    //     !!!!
        setEmpData(response.data); 
        setLoading(false);
    }

    return (loading)?<p>Loading...</p>:(
        <div className='display-page'>

        <div className='employee-details'>

            <div className='content' id='content-display'>
                <h2 className="title">Employee Medical Card</h2>
                <div className="all-details">

                    <div className='employee-details'>
                        <div className='basic-details'>
                           <h3 className='emp-dep-head' >Employee Details</h3>
                           <img src={empData["image"]} alt="employee" className='emp-img-form' />
                            <table className='e-table'>
                                <tbody>
                                    <tr>
                                        <td className="e-td-left">Name of the Employee</td>
                                        <td className="e-td">{empData["employeeName"]}</td>
                                    </tr>   
                                    <tr>
                                        <td className="e-td-left">Mobile Number</td>
                                        <td className="e-td">{empData["mobileNumber"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="e-td-left">Date of Birth</td>
                                        <td className="e-td">{empData["dateOfBirth"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="e-td-left">Address</td>
                                        <td className="e-td">{empData["address"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="e-td-left">Designation</td>
                                        <td className="e-td">{empData["designation"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="e-td-left">Ward</td>
                                        <td className="e-td">{empData["ward"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="e-td-left">Blood Group</td>
                                        <td className="e-td">{empData["bloodGroup"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="e-td-left">Pay Matrix</td>
                                        <td className="e-td">{empData["payMatrix"]}</td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>


                        </div>
                    </div>
                    

                </div>

                <div className='dependent-details'>
                    <h3 >Employee Dependents</h3>
                    <div className='d-display-tr'>

                    { 
                        empData["allDependents"].map((item,i)=>(
                            <div key={i} className="d-form-display">
                                
                                <img src={item["image"]} alt={item["name"]} className='dep-img-form'/>
                                <div className='d-field' >
                                    Name: {item["name"]}
                                </div>
                                <div className='d-field'>
                                    DOB: {item["dateOfBirth"]}
                                </div>
                                <div className='d-field'>
                                    Relation: {item["relation"]}
                                </div>
                                
                            </div>
                        )) 
                    }
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default EmployeeDetails
