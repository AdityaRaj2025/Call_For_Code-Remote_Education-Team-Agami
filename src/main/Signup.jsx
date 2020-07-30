import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    id:"",
    name:"",
    number:"",
    email: "",
    password: "",
    cpassword:"",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      ` My password is ${data.password} and email is ${data.email}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Sign Up </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
                
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="id"
                  value={data.id}
                  onChange={InputEvent}
                  placeholder="Faculty Id"
                />
              </div>
            <div class="mb-3">
                
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Full Name"
                />
              </div>
            <div class="mb-3">
                
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Email Id"
                />
              </div>
              <div class="mb-3">
                
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
               
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Password"
                />
              </div>
              <div class="mb-3">
                
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="cpassword"
                  value={data.cpassword}
                  onChange={InputEvent}
                  placeholder="Confirm Password"
                />
              </div>
              <div class="col-12">
                
                <button class="btn btn-outline-primary" type="submit">
                  Sign Up
                </button>
               
              </div>
            
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  .
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
