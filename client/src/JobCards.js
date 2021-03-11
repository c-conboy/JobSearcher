import React from "react";
import Typography from "@material-ui/core/Typography";
import JobCard from "./JobCard";


export default function JobCards({ jobs }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [addedJobList, setAddedJobList] = React.useState([]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    const handleAddJob = (newJob) => {
        /*console.log("active step:" + activeStep);
        console.log("Job at activestep:" + jobs[activeStep].company);
        console.log("Before add: ");
        console.log(addedJobList);*/
        console.log(newJob);
        setAddedJobList([newJob, ...addedJobList]);
        //console.log("After add: ");
       // console.log(addedJobList);
    }


    return(
        <div className = "jobCards"> 
        <Typography variant="h5">
            Job Searcher
        </Typography>

        <JobCard job = {jobs[activeStep]} next = {handleNext} add = {handleAddJob}></JobCard>

        </div>
    )
}