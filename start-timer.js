#!/usr/bin/env node

import dotenv from 'dotenv'
const result = dotenv.config()

import fetch from 'node-fetch'; 
const URL = 'https://api.track.toggl.com/api/v8/time_entries/start';

export function startTimer(projectID, projectName, desc){
  fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${process.env.API_TOKEN}:api_token`)
    },
    body: JSON.stringify({"time_entry":{"description":`${desc}`,"pid":projectID,"created_with":"RayCast"}})
    })
    .then((response) => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(`⏲️: ${projectName} timer started`);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
  });
}