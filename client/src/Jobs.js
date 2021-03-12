import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import DialogueTitle from "@material-ui/core/DialogTitle";
import Dialogue from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Job from "./Job";
import JobModal from "./JobModal";


//Appbar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
//


export default function Jobs({ jobs }) {


//Modal

    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});

    const classes = useStyles();//appbar

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

//Pagination
  const jobsPerPage = 6; 
  const numJobs = jobs.length; 
  const numPages = Math.floor(numJobs / jobsPerPage);
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep*jobsPerPage, (activeStep*jobsPerPage)+jobsPerPage);

  const handleNext = (test) => {
    console.log(test);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="jobs">
        
        <JobModal open ={open} job = {selectedJob} handleClose = {handleClose}></JobModal>

        <AppBar position="static">
            <Toolbar>
            <Typography variant="h5" className={classes.title}>
                 Your Job Matches
            </Typography>
          </Toolbar>
        </AppBar>

      {
      jobsOnPage.map(
          (job, i) => (<Job key = {i} job={job} onClick = {() => {
            handleClickOpen();
            selectJob(job) 
          }}/>
      ))
      }
      <div className = "title">
          Page {activeStep+1} of {numPages}
      </div>

      <MobileStepper
        className = "title"
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
