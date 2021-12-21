import{ useState, useEffect } from 'react'
import domain from "./config/index"
import QRCode from "qrcode.react";
import axios from "axios";
import jsPDF from 'jspdf';

const EmployeePage = ({id}) => {


    const url = `${domain.baseUrl}:3000/employee-details/${id}`;
    const [empData, setEmpData] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEmployeeData();
    }, [])

    let getEmployeeData = async () => { 
        let response = await axios.get(`/api/employee/${id}`);
        setEmpData(response.data); 
        setLoading(false);
    } 

    let generatePDF = () =>{
        var doc = new jsPDF("portrait","pt", "a4", false);
        var content = document.getElementById("content");
        console.log("content", content);
        console.log("document.body", document.body);
        doc.html(content, {
        callback: function(pdf) {
            var pageCount = doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount)
            console.log("in callback , pgCount ", pageCount);
            pdf.save('Medical Card AICTE');
      }
    });
    }


    return (loading)?<p>Loading...</p>: (

        <div className="emp-download-page">


            <button className='PDFbutton' onClick={generatePDF}> Download PDF</button>
            
            <div className='content' id='content'>
                <h2 className="Emp-title">Employee Medical Card</h2>
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
                    
                    <div className='qr-code'>
                        <QRCode value={url} />
                    </div>

                </div>

                <div className='dependent-details'>
                    <h3 className="dep-head">Employee Dependents</h3>

                    { 

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
                    }


                </div>
                <div className="verify">Your form id is {id}, you can verify this form at <a target="_blank" rel='noreferrer' href={url}>{url}</a></div>
            </div>

        </div>
    )
}

export default EmployeePage
