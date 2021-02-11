var fetch = require('node-fetch');

var redis = require("redis"), client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub(){

    let resultCount = 1, onPage = 0;
    const allJobs = [];


    //fetchs all pages
    while(resultCount > 0){
        const res = await fetch(`${baseURL}?page=${onPage}`); 
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got ' +  resultCount + " jobs");
        onPage++;


    }


    console.log('got ' + allJobs.length + " jobs");

    //filter all 

    const jrJobs = allJobs.filter(job =>{
        const jobTitle = job.title.toLowerCase();
        //Algorithm Logic

        if (jobTitle.includes('senior') || 
        jobTitle.includes('manager') || 
        jobTitle.includes('sr.') ||
        jobTitle.includes('architect')
        ){
            return false;
        }

        return true;
        
    });

    console.log('Filtered down to', jrJobs.length);

    //sets in redis
    
    const success = await setAsync('github', JSON.stringify(jrJobs));

    console.log({success});

}



module.exports = fetchGithub; 