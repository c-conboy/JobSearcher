import React from 'react';
import Typography from '@material-ui/core/Typography';

import Job from './Job';

export default function Jobs({jobs}){

    return(
        <div className = "jobs">
            <Typography variant="h2">
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