import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setinterest] = useState(0)
  const [year, setYear] = useState(0)
  const [result, setresult] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isInterest, setIsInterest] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const calculateInterest = (e) => {
    e.preventDefault();
    const result = (principle * interest * year) / 100;
    setresult(result)
  }
  const handleReset = () => {
    setPrinciple(0);
    setYear(0);
    setinterest(0);
    setresult(0);
  }
  const validate = (e) => {
    const { name, value } = e.target;
    setPrinciple(value)
    console.log(name, value);
    if (name === 'principlevalue') {
      let res = (!!value.match(/^[0-9]+$/))
      if (res === true) {
        setIsPrinciple(true)
      }
      else {
        setIsPrinciple(false)

      }
    }
    else if (name === 'interestField') {
      setinterest(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsInterest(true)
      }
      else {
        setIsInterest(false)
      }
    }

    else if (name === 'yearField') {
      setYear(value);
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsYear(true)
      }
      else {
        setIsYear(false)
      }
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "90vh" }}>
        <div className='bg-light p-5 rounded' style={{ width: "500px" }}>
          <h1>Simple Interest</h1>
          <p>Calculate your simple intrest easily</p>
          <div style={{ height: "150px" }}
            className='flex-column bg-warning mt-3 rounded d-flex  justify-content-center align-items-center'>
            <h2>&#8377;{result} </h2>
            <p>Total simple interest</p>
          </div>
          <form className='mt-3' onSubmit={calculateInterest}>
            <TextField className='w-100 mb-2' id="outlined-basic" label="&#8377; Principle Amount" variant="outlined"
              value={principle}
              name="principlevalue"
              onChange={(e) => validate(e)} />
            {
              !isPrinciple &&
              <div>
                <p className='text-danger'>Invalid input</p>
              </div>
            }
            <TextField className='w-100 mb-2' id="outlined-basic" label="Rate of Interest(p.a) %" variant="outlined"
              value={interest}
              name="interestField"
              onChange={(e) => validate(e)} />
            {
              !isInterest &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>
            }

            <TextField className='w-100 mb-2' id="outlined-basic" label="Year(Yr)" variant="outlined"
              value={year}
              name='yearField'
              onChange={(e) => validate(e)} />
            {
              !isYear &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>
            }
            <Stack direction="row" spacing={2} className='mt-3'>
              <Button  variant="contained" className='bg-success' style={{ height: "50px", width: "200px" }} type='submit' >Calculate</Button>
              <Button variant="contained" className='bg-light' style={{ height: "50px", width: "200px", color: "blue" }} onClick={handleReset}>Reset</Button>
            </Stack>

          </form>

        </div>
      </div>
    </>
  );
}

export default App;
