import fetch from 'node-fetch';
import React from 'react';
import './App.css';
import Jobs from './Jobs';


const JOB_API_URL = '/api/jobs'

const mockJobs = [

  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Apple'}

]


async function fetchJobs (updateCb){
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);

  console.log({json});
} 


function App() {

  const [jobList, updateJobs] = React.useState([]);

React.useEffect(()=>{
  fetchJobs(updateJobs);
}, [])


  return (
    <div className="App">
      <Jobs jobs={jobList}/>

    </div>
  );
}

export default App;
