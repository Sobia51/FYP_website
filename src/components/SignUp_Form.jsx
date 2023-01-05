import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material'
const SignUp_Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [url, setURL] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    companyName: "",
    url: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }
  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!url.trim()) {
      errors.url = "URL is required";
    } else {
      errors.url = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }
    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    // const password = password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    // if (!inputValues.confirmPassword) {
    //   errors.confirmPassword = "Password confirmation is required";
    // } else if (inputValues.confirmPassword !== inputValues.Password) {
    //   errors.confirmPassword = "Password does not match confirmation password";
    // } else {
    //   errors.password = "";
    // }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [name,email,password,companyName,url]);

  return (
    <section className="Container" style={{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
      backgroundImage: 'url(../images/bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem'
    }}>
      <Box
      component={'form'}
        position={'relative'}
        display='flex'
        maxWidth={500}
        flexDirection={'column'}
        margin={3}
        padding={3}
        justifyContent={'center'}
        alignItems='center'
        textAlign='center'
        borderRadius={5}
        backgroundColor='#fff'
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
          ":hover": {
            boxShadow: '10px 10px 20px #ccc'
          }
        }}
      >

        <h1 style={{
          color: '#122a5e',
          fontSize: '2.3rem',
        }}>Register for WebAccessify</h1>
        <p style={{
          margin: '0rem 0rem 1rem 18rem',
          fontSize: '1.3rem',
        }}>
          Already have an account?
          <Link to="/sign-in">
            Sign in
          </Link>
        </p>
        <TextField
          margin="normal"
          required
          id="name"
          fullWidth
          variant='outlined'
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={name} onChange={(e) => setName(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          variant='outlined'
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email} onChange={(e) => setEmail(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
          {...validation.email && <p>{validation.email}</p>}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          variant='outlined'
          id="companyName"
          label="companyName"
          name="companyName"
          autoComplete="companyName"
          autoFocus
          value={companyName} onChange={(e) => setCompanyName(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
        />
        <TextField
          margin="normal"
          variant='outlined'
          required
          id="Website URL"
          label="Website URL"
          name="Website URL"
          autoComplete="Website URL"
          autoFocus
          fullWidth
          value={url} onChange={(e) => setURL(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
        />
        <TextField
          margin="normal"
          required
          type='password'
          variant='outlined'
          id="Password"
          label="Password"
          name="Password"
          autoComplete="Password"
          autoFocus
          fullWidth
          value={password} onChange={(e) => setPassword(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
          {...validation.name && <p>{validation.password}</p>}
        />
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I agree to the WebAccessify Terms of Use, Cookie Policy and Privacy Statement"
          inputProps={{ style: { fontSize: '1.4rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '2rem' } }}
          style={{
            marginTop: '1rem',
          }} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            margin: '1.2rem',
            width: 'clamp(10rem, 13vw, 13rem)',
            height: 'clamp(2rem, 4vw, 4rem)',
            backgroundColor: '#122a5e',
            color: '#fff',
            fontSize: '1.5rem'
          }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </section>

  )
}

export default SignUp_Form
