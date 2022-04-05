import React from "react";
import { useState } from "react";
import './Home.css'

export default function AskForm() {
   const [Name, setname] = useState('');
   const [Country, setcountry] = useState('');
   const [City, setcity] = useState('');
   const [Phone, setphone] = useState('');
   const [Email, setemail] = useState('');
   const [Title, settitle] = useState('');
   const [Area, setarea] = useState('');
   const [Message, setmsg] = useState('');
   const [File, setfile] = useState('');
   const SubmitForm  = ()=>{
        console.log("Name : ", Name);
        console.log("Country : ", Country);
        console.log("City : ", City);
        console.log("Phone : ", Phone);
        console.log("Email : ", Email);
        console.log("Title : ", Title);
        console.log("Area : ", Area);
        console.log("Message : ", Message);
        console.log("File : ", File);
   }
    return (
    <div className="container-fluid">
      <div className="paskform">
        <h1>Ask A Question</h1>
      </div>
      <div className="container-fluid row pform">
        <div className="col-md-5 leftform">
          <h2>______ Do You Have Any Legal Query?</h2>
          <h1>
            Ask A <span>Question</span>
          </h1>
          <p>
            Do you have any legal query or you need an opinion of a lawyer on
            any legal matter. Do you think that opinion of a single lawyer is
            enough to reach at a correct decision?
          </p>
          <h3>
            Just fill in the details and get free legal opinions from multiple
            lawyers of your town.
          </h3>
        </div>
        <div className="col-md-6 righform">
          <input type="text" placeholder="Name*" onChange={(e)=>setname(e.target.value)} />
          <input type="text" placeholder="Country*" onChange={(e)=>setcountry(e.target.value)} />
          <input type="text" placeholder="City*" onChange={(e)=>setcity(e.target.value)}/>
          <input type="text" placeholder="PhoneNo*" onChange={(e)=>setphone(e.target.value)}/>
          <input type="text" placeholder="Email*" onChange={(e)=>setemail(e.target.value)}/>
          <input type="text" placeholder="Add Title To Your Question*" onChange={(e)=>settitle(e.target.value)}/>
          <select name="area" id="area" onChange={(e)=>setarea(e.target.value)}>
          <option value="CivilLaw">Area Of Law</option>
            <option value="CivilLaw">Civil Law</option>
            <option value="FamilyLaw">Family Law</option>
            <option value="TaxationLaw">Taxation Law</option>
            <option value="TransactionWork">Transactional Work</option>
            <option value="Visa">Visa & Immigration Services</option>
            <option value="Employement">Employment/Labour Law</option>
            <option value="Probono">PRO-Bono Services</option>
            <option value="Others">-Others-</option>    
          </select>
          <textarea name="msg" id="msg" cols="30" rows="9" placeholder="Briefly Discribe Your Question*" onChange={(e)=>setmsg(e.target.value)}></textarea>
          <h2>Attach Document</h2>
          <input type="file" onChange={(e)=>setfile(e.target.value)} /><br />
          <button className="btn submitbtn" onClick={(e)=>SubmitForm()}>Submit Here</button>
        </div>
      </div>
    </div>
  );
}
