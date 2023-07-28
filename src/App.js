import React, { useState } from "react";

const App = () => {
  const[formData , setFormData] = useState({firstName : "" , lastName : "" , email: "" , country : "india" , streetAddress : "",
  city : "" , state : "" , postalCode : "" , comments : false , candidate : false , offer : false , pushNotification : "" })
  function changeHandler(event){
    const{name , value , checked , type } = event.target;
    setFormData((prevData) =>(
      {...prevData , [name] : type === "checkbox" ? checked : value}
    ))
  }
  function submithandler(event){
    event.preventDefault();
    console.log("submitting form data");
    console.log(formData);
  }
  return (
    <div className=" flex flex-col items-center justify-center ">
      <form onSubmit={submithandler}>
        <label htmlFor="firstName" > first name </label>
        <br/>
        <input type="text" name="firstName" id="firstName" placeholder="enter your first name" value={formData.firstName} 
        onChange={changeHandler} className="outline mt-5 " />
          <br/>
          <br/>
        <label htmlFor="lastName" > last Name  </label>
        <br/>
        <input type="text" name="lastName" id="lastName" placeholder="enter your last name" value={formData.lastName} 
        onChange={changeHandler} className="outline mt-5 " />
        <br/>
          <br/>
        <label htmlFor="email" > enter your email  </label>
        <br/>
        <input type="text" name="email" id="email" placeholder="enter your email " value={formData.email} 
        onChange={changeHandler} className="outline mt-5 " />
        <br/>
          <br/>
        <label htmlFor="country"> select a Country</label>
          <br/>
          <select id="country" name="country" value={formData.country} onChange={changeHandler} className="outline" >
            <option>india</option>
            <option>usa</option>
            <option>africa</option>
            <option>japan</option>
            <option>china</option>
          </select>
          <br/>
          <br/>
        <label htmlFor="streetAddress" > street address </label>
        <br/>
        <input type="text" name="streetAddress" id="streetAddress" placeholder="enter the street address" value={formData.streetAddress} 
        onChange={changeHandler} className="outline mt-5 " />
          <br/>
          <br/>
        <label htmlFor="city" > city  </label>
        <br/>
        <input type="text" name="city" id="city" placeholder="enter the street address" value={formData.city} 
        onChange={changeHandler} className="outline mt-5 " />
          <br/>
          <br/>
        <label htmlFor="state" > state  </label>
        <br/>
        <input type="text" name="state" id="state" placeholder="state" value={formData.state} 
        onChange={changeHandler} className="outline mt-5 " />
          <br/>
          <br/>
        <label htmlFor="postalCode" > postalCode  </label>
        <br/>
        <input type="text" name="postalCode" id="postalCode" placeholder="postalCode" value={formData.state} 
        onChange={changeHandler} className="outline mt-5 " />
        <br/>
        <fieldset>
          <legend>
            by email
          </legend>
            <div className=" flex flex-row ">
            <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changeHandler} />
            <div>
              <label htmlFor="comments" >Comments</label>
              <p>get notified when someone post a comments</p>
            </div>
            </div>

            <div className=" flex flex-row ">
            <input type="checkbox" id="candidate" name="candidate" checked={formData.candidate} onChange={changeHandler} />
            <div>
              <label htmlFor="candidate" >candidate</label>
              <p>get notified when candidate apply for jobs</p>
            </div>
            </div>

            <div className=" flex flex-row ">
            <input type="checkbox" id="offer" name="offer" checked={formData.candidate} onChange={changeHandler} />
            <div>
              <label htmlFor="offer" >offer</label>
              <p>get notified when candidate offer a jobs or reject a jobs</p>
            </div>
            </div>

        </fieldset>

        <fieldset>
          <legend>push notification</legend>
          <p>these are delevered via sms to your mobile phone</p>
          <input type="radio" id="pushEverything" name="pushNotification" value="everyThing" onChange={changeHandler} />
          <label htmlFor="pushEverything" > EveryThing</label>
            <br/>
          <input type="radio" id="pushEmail" name="pushNotification" value="same as email" onChange={changeHandler} />
          <label htmlFor="pushEmail" > same as email</label>
          <br/>
          <input type="radio" id="pushNothing" name="pushNotification" value="no push notification" onChange={changeHandler} />
          <label htmlFor="pushNothing" >no push notification</label>
        </fieldset>

          <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded ">save</button>
          
      </form>

    </div>
  )
};

export default App;
