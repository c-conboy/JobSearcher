import fetch from 'node-fetch';
import React from 'react';
import './App.css';
import Jobs from './Jobs';
import JobCards from './JobCards'

const JOB_API_URL = '/api/jobs';

async function fetchJobs (updateCb){
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);

  console.log({json});
} 


function App() {

  const [jobList, updateJobs] = React.useState([]);

  const [addedJobList, setAddedJobList] = React.useState([]);

  
  const handleAddJob = (newJob) => { 
    setAddedJobList([newJob, ...addedJobList]);
  }

React.useEffect(()=>{
  fetchJobs(updateJobs);
}, [])

  return (
    <div className="App">
      <JobCards jobs={jobList} handleAdd ={handleAddJob}/>
      <Jobs jobs={addedJobList}/>
    </div>
  );
}

export default App;
