import "./style.css";
import UseInput from "../CustomHooks/UseInput";
import React, { useState } from 'react'
import swal from 'sweetalert';

function FormInput() {
  const [name, handleNameChange] = UseInput("");
  const [isNameValid, setNameValid] = useState("notSet");
  const [email, handleEmailChange] = UseInput("");
  const [isEmailValid, setEmailValid] = useState("notSet");
  const [password, handleMessageChange] = UseInput("");
  const [isMessageValid, setMessageValid] = useState("notSet");

  React.useEffect(() =>{
    if (name !== '') {
        if (name.length >= 8) {
            setNameValid('valid')
        } else {
            setNameValid('notValid')
        }
      } else if (name === '') {
        setNameValid('notSet')
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])
  React.useEffect(() => {
    if (email !== '') {
      if (/\S+@\S+\.\S+/.test(email)) {
        setEmailValid('valid')
      } else {
        setEmailValid('notValid')
      }
    } else if (email === '') {
      setEmailValid('notSet')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email])
  React.useEffect(() => {
    if (password !== '') {
      if (password.length >= 8) {
          setMessageValid('valid')
      } else {
          setMessageValid('notValid')
      }
    } else if (name === '') {
      setMessageValid('notSet')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password])
  
  const onRegisterHandler = async (event) => {
    event.preventDefault();
    if(isNameValid === 'notSet'){
      setNameValid('notValid')
    }
    if(isEmailValid === 'notSet'){
      setEmailValid('notValid')
    }
    if(isMessageValid === 'notSet'){
      setMessageValid('notValid')
    }

    if(isNameValid === 'valid' && isEmailValid === 'valid' && isMessageValid === 'valid'){
      swal("Success!", "Semua Input Valid!", "success");
    }
    // else if(isNameValid === 'notSet'){
    //   swal("Warning!", "Input Name Belum Dimasukkan!", "error");
    // }
    // else if(isNameValid === 'notValid'){
    //   swal("Warning!", "Input Name Tidak Valid!", "error");
    // }
    // else if(isEmailValid === 'notSet'){
    //   swal("Warning!", "Input Email Belum Dimasukkan!", "error");
    // }
    // else if(isEmailValid === 'notValid'){
    //   swal("Warning!", "Input Email Tidak Valid!", "error");
    // }
    // else if(isMessageValid === 'notSet'){
    //   swal("Warning!", "Input Password Belum Dimasukkan!", "error");
    // }
    // else if(isMessageValid === 'notValid'){
    //   swal("Warning!", "Input Password Tidak Valid!", "error");
    // }
    
  };
  return (
    <section className="form-container">
    <h2 className="title-form">CONTACT US</h2>
      <form
        onSubmit={onRegisterHandler}
        className="center form-input"
      >
        <label>Name</label>
        <input
          placeholder="Masukkan nama..."
          value={name}
          onChange={handleNameChange}
          className={isNameValid}
          style={isNameValid === 'notValid' ? {margin : '0'} : {margin : '2px 0 15px'}}
        />
        {isNameValid === 'notValid' ? <p className="danger">This field is required.</p> : ''}
        <label>Email</label>
        <input
          placeholder="Masukkan email..."
          value={email}
          onChange={handleEmailChange}
          className={isEmailValid}
          style={isEmailValid === 'notValid' ? {margin : '0'} : {margin : '2px 0 15px'}}
        />
        {isEmailValid === 'notValid' ? <p className="danger">Invalid email address.</p> : ''}
        <label>Message</label>
        <textarea
          rows={4}
          placeholder="Masukkan password..."
          value={password}
          onChange={handleMessageChange}
          className={isMessageValid}
          style={isMessageValid === 'notValid' ? {margin : '0'} : {margin : '2px 0 15px'}}
        />
        {isMessageValid === 'notValid' ? <p className="danger">This field is required.</p> : ''}
        <button className="btn-submit">Regis Now</button>
      </form>
    </section>
  );
}
export default FormInput;
