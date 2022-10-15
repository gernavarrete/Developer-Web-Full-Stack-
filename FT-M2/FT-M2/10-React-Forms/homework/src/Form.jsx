import React, { useState } from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if(!input.password) {
    errors.password = 'Password is required'
  } else if (!/\d+/.test(input.password)){
    errors.password = 'Password is invalid'
  }
  return errors;
};

export default function  Form() {
  const [input, setInput] = useState({username: '', password:''});
  const {username, password} = input;
  const [errors, setErrors] = useState({})

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  let handleSubmit = (e) => { 
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input key='username'
        className={errors.username && 'danger'}
        type="text" 
        name="username" 
        value={username}
        placeholder='username'
        onChange={handleInputChange}/>
        {!errors.username ? null : <p className={errors.username && 'danger'}>{errors.username}</p>}
        {/* {errors.username && ( <p className="danger">{errors.username}</p>)} */}
      </div>
      <div>
        <label>Password:</label>
        <input key='password' 
        className={errors.password && 'danger'}
        type='password' 
        name='password'
        value={password}
        placeholder='password'
        onChange={handleInputChange}/>
        {!errors.password ? null : <p className={errors.password && 'danger'}>{errors.password}</p>}
        {/* {errors.username && ( <p className="danger">{errors.username}</p>)} */}
      </div>
      <input type='submit' value='Submit'/>
    </form>
  )
}
