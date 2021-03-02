import { Typography } from '@material-ui/core';
import React from 'react';

import Paper from  '@material-ui/core/Paper';

export default function Job({job}){

    return(
        <Paper className = {'job'}>
            <div>
                <Typography>{job.title}</Typography>
                <Typography>{job.company}</Typography>
                <Typography>{job.location}</Typography>
            </div>

            <div>
                <Typography>{job.created_at.split(' ').splice(0, 3).join(' ')}</Typography>
            </div>
        </Paper>
    )
    
}