import React from "react";
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, Icon, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function JobCard({ job, next, add}) {


    if(job == null){
        return(<p>Job not found</p>);
    }


    const handleAdd = () => {
        add(job);
        next();
    }

    console.log("Current job card is:" + job.company);


    return(
        <div>
            <Card className = {"jobCard"}>
            <CardContent> 
            <Typography variant="h3">{job.title}</Typography>
            <img className = {'card-logo'} src = {job.company_logo} />
            <Typography variant="h5">{job.company}</Typography>
            <Typography>{job.location}</Typography>
    
            </CardContent>

            <CardActions>
                <Button onClick = {handleAdd}>
                   <ThumbDownIcon style={{ color: "#8B0000" }} ></ThumbDownIcon>
                </Button>

                <Button onClick = {next}>
                    <ThumbUpIcon style={{ color: "#006400" }} ></ThumbUpIcon>
                    
                </Button>

            </CardActions>

        </Card>
        </div>
    )
}