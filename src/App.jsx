import React, { useRef, useState } from 'react';
import './App.css';

function ValidationForm() {
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateInput = () => {
    const newErrors = {};
    if (nameRef.current.value.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      newErrors.email = 'Invalid email address';
    }
    if (passwordRef.current.value.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    validateInput();

    if (Object.keys(errors).length === 0) {
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      console.log('Form Data:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          onBlur={validateInput}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          onBlur={validateInput}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          onBlur={validateInput}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
