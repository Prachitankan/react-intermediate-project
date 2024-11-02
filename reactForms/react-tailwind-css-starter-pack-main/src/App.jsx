import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "", zip: "",
    comments: false, candidate: false, offers: false, pushNotificatin:""
  })

  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }


  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value of form data")
    console.log(formData);
  }

  return (
    <div className="flex items-center flex-col min-h-screen">
      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor='firstName' >First name</label>
        
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Massao'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />
        
        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='last name'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'
        />
        
        <label htmlFor='email'>Email address</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='massao123@gmail.com'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />
     
        <label htmlFor="country">Country</label>
        
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >

          <option>India</option>
          <option>United states</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        
        <label htmlFor='streetAddress'>Street address</label>
        <input
          type='text'
          name='streetAddress'
          id='streetAddress'
          placeholder='123 Main st'
          value={formData.streetAddress}
          onChange={changeHandler}
          className='outline'
        />

        
        <label htmlFor='city'>City</label>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='Meerut'
          value={formData.city}
          onChange={changeHandler}
          className='outline'
        />
       
        <label htmlFor='state'>State</label>
        <input
          type='text'
          name='state'
          id='state'
          placeholder='UP'
          value={formData.state}
          onChange={changeHandler}
          className='outline'
        />
     
        <label htmlFor='zip'>ZIP / Postal code</label>
        <input
          type='text'
          name='zip'
          id='zip'
          placeholder='25xxx'
          value={formData.zip}
          onChange={changeHandler}
          className='outline'
        />


        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              value={formData.candidate}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidate">Candidate</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              value={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>


        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
          type="radio"
          id="pushEverything"
          name="pushNotificatin"
          value="Everything"
          onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <input
          type="radio"
          id="pushEmail"
          name="pushNotificatin"
          value="Same as email"
          onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>

          <input
          type="radio"
          id="pushNothing"
          name="pushNotificatin"
          value="No push notifications"
          onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No push notifications</label>


        </fieldset>


        <button 
        className="bg-blue-500 text-white font-bold rounded py-2 px-4" 
        >Save</button>




      </form>
    </div>
  );
}

export default App;
