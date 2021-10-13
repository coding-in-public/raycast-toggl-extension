#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Stop Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/toggl.png

// Documentation:
// @raycast.author Chris Pennington @cpenned on Twitter

import dotenv from 'dotenv'
const result = dotenv.config()

import fetch from 'node-fetch'; 

const URL = 'https://api.track.toggl.com/api/v8/time_entries/start';
const CURRENT_URL = `https://api.track.toggl.com/api/v8/time_entries/current`;

function processTime(durationWorkedInSeconds){
  const duration = durationWorkedInSeconds * 1000;
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const daysWorked = Math.floor(duration / DAY);
  const hoursWorked = Math.floor((duration % DAY) / HOUR);
  const minutesWorked = Math.floor((duration % HOUR) / MINUTE);
  const secondsWorked = Math.floor((duration % MINUTE) / SECOND);
  
  return `${hoursWorked < 10 ? `0${hoursWorked}` : `${hoursWorked}`}:${minutesWorked < 10 ? `0${minutesWorked}` : `${minutesWorked}`}:${secondsWorked < 10 ? `0${secondsWorked}` : `${secondsWorked}`}`
}


function stopTimer(currentData){ 

  fetch(`https://api.track.toggl.com/api/v8/time_entries/${currentData.id}/stop`, {
    headers: {
        'Authorization': 'Basic ' + btoa(`${process.env.API_TOKEN}:api_token`)
    }
  })
    .then((response) => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(`⏲️🛑: Worked ${processTime(data.data.duration)}`)
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}


fetch('https://api.track.toggl.com/api/v8/time_entries/current', {
  headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.API_TOKEN}:api_token`)
  }
})
  .then((response) => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    data.data === null ? console.log('No Timer Running') : stopTimer(data.data);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
});