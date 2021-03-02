import React from 'react';
import Typography from '@material-ui/core/Typography';
import DialogueTitle from '@material-ui/core/DialogTitle';
import Dialogue from '@material-ui/core/Dialog';
import Button from '@material-ui/core/DialogTitle';

import Job from './Job';

export default function Jobs({jobs}){

    return(
        <div className = "jobs">
            <Typography variant="h4" component="h1">
                Entry Level Job Searcher
            </Typography>
            {
                jobs.map(
                    job => <Job job = {job} />
                )

            }
        </div>
    )

}