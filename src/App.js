import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';

function App() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    mobile: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const inputs =[
    {
      name: 'fullname', 
      type: 'text', 
      placeholder: 'Full Name', 
      label: 'Full Name',
      pattern: `[a-zA-Z]{3,16}[ ]{0,1}[a-zA-z]{3,16}$`, 
      errorMsg: "Provide the valid full name!!", 
      required: true
    },
    {
      name: 'email', 
      type: 'email', 
      placeholder: 'Email', 
      label: 'Email', 
      errorMsg: "Email address is required.", 
      required: true
    },
    {
      name: 'mobile', 
      type: 'number', 
      placeholder: 'Mobile Number', 
      label: 'Mobile Number', 
      errorMsg: "Phone number must be provide!!", 
      required: true
    },
    {
      name: 'birthdate', 
      type: 'date', 
      placeholder: 'Date of Birth', 
      label: 'Date of Birth', 
      errorMsg: "Date of Birth must be enter!!", 
      required: true
    },
    {
      name: 'password', 
      type: 'password', 
      placeholder: 'Password', 
      label: 'Password', 
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`, 
      errorMsg:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!", 
      required: true
    },
    {
      name: 'confirmedPassword', 
      type: 'password', 
      placeholder: 'Confirm Password', 
      pattern: values.password, 
      label: 'Comfirm Password', 
      errorMsg: "Password does not match!!", 
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.prevantDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        {inputs.map((input, idx)=>(
          <InputForm key={idx} {...input} onChange={onChange} />
        ))}
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default App;
