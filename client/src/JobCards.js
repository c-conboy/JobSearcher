import React from "react";
import Typography from "@material-ui/core/Typography";
import JobCard from "./JobCard";


export default function JobCards({ jobs }) {

    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    return(
        <div className = "jobCards"> 
        <Typography variant="h5">
            Job Searcher
        </Typography>

        <JobCard job = {jobs[activeStep]} next = {handleNext}></JobCard>

        </div>
    )
}