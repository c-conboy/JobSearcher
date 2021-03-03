import React from "react";
import Typography from "@material-ui/core/Typography";
import DialogueTitle from "@material-ui/core/DialogTitle";
import Dialogue from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import Job from "./Job";
import JobModal from "./JobModal";

export default function Jobs({ jobs }) {


//Modal

    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

//Pagination
  const jobsPerPage = 20; 
  const numJobs = jobs.length; 
  const numPages = Math.floor(numJobs / jobsPerPage);
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep*jobsPerPage, (activeStep*jobsPerPage)+jobsPerPage);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="jobs">
        <JobModal open ={open} job = {selectedJob} handleClose = {handleClose}></JobModal>
        <Typography variant="h4" component="h1">
        Entry Level Job Searcher
      </Typography>
      <Typography variant="h6">
          Found {numJobs} Jobs
      </Typography>
      {
      
      
      jobsOnPage.map(
          (job, i) => (<Job key = {i} job={job} onClick = {() => {
            handleClickOpen();
            selectJob(job) 
          }}/>
      ))
      
      }
      <div>
          Page {activeStep+1} of {numPages}
      </div>

      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}
