import React from "react"
import "./ApplyStyle.css";

const Apply = () => {
  return (
    <div className="Register-form">
       
       

       <form className="reg-form">
       <h1 className="reg-heading">Registration Form</h1>
          <table className="reg-table">


            <tr className="table-row">
              <td>
                  <label htmlFor="Name" className="form-label">Name :</label>
              </td>
              <td>
                 <input type="text" className="form-input"></input>
              </td>
            </tr>



            <tr className="table-row">
              <td>
                  <label htmlFor="DOB" className="form-label">Date of Birth :</label>
              </td>
              <td>
                 <input type="date" className="form-input"></input>
              </td>
            </tr>



            <tr className="table-row">
              <td>
                  <label htmlFor="gender" className="form-label">Gender :</label>
              </td>
              <td>
                 <input type="radio" name="gender" ></input>Male
                 <input type="radio" name="gender"></input>Female
              </td>
            </tr>



            <tr className="table-row">
              <td>
                  <label htmlFor="course" className="form-label">Select Your Course :</label>
              </td>
              <td>
              <select className="form-select">
                  <option>Front-End</option>
                  <option>Back-End</option>
                  <option>Mobile Application</option>
                  <option>Data Analytics</option>
                  <option>Software Testing</option>
                </select>
              </td>
            </tr>


            
            
          <tr className="table-row">
              <td>
                  <label htmlFor="e-mail" className="form-label">E-mail ID :</label>
              </td>
              <td>
                  <input type="email" className="form-input"></input>
              </td>
            </tr>

            <tr className="table-row">
              <td>
                 <label htmlFor="ph.num" className="form-label">Mobile no :</label>
              </td>
              <td>
                 <input type="number" className="form-input"></input>
              </td>
            </tr>

            <tr className="table-row">
              <td>
                 <label htmlFor="degree" className="form-label">Degree :</label>
              </td>
              <td>
                 <input type="Text" className="form-input"></input>
              </td>
            </tr>
          
          </table>
       </form>

       <div className="contact">
         
       </div>
       
    </div>
  )
}

export default Apply;