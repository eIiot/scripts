const dotenv = require('dotenv');
const axios = require('axios');
const express = require('express');
const fs = require('fs');

dotenv.config();

// exchange strava code for access token
const exchangeCode = async (code) => {
  const response = await axios.post(
    'https://www.strava.com/api/v3/oauth/token',
    {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
    },
  );
  console.log(response.data);
  return response.data;
};

// exchangeCode(process.env.STRAVA_CODE);

// get athlete activites
const getActivities = async (accessToken) => {
  const response = await axios.get(
    'https://www.strava.com/api/v3/athlete/activities?after=1629097201&per_page=200', // after in unix timestamp, per_page should just be large enough to get all activities
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  console.log(response.data);
  return response.data;
};

express()
  .get('/', (req, res) => {
    console.log(req); 
    exchangeCode(req.query.code)
      .then((data) => {
        getActivities(data.access_token)
          .then((activities) => {
            res.send(activities);
            let seconds = 0;
            var meters_dist = 0;
            let meters_climb = 0;
            for (let i = 0; i < activities.length; i++) {
              seconds += activities[i].elapsed_time;
              meters_dist += activities[i].distance;
              meters_climb += activities[i].total_elevation_gain;
            }
            var miles = meters_dist / 1609.34;
            var hours = (seconds / 60) / 60;
            var feet = meters_climb * 3.28084;
            console.log(`This semester, you have ridden:`)
            console.log(`${hours.toFixed(2)} hours`);
            console.log(`${miles.toFixed(2)} miles`);
            console.log(`${feet.toFixed(2)} feet`);
          });
      });
  })
  .listen(80, () => {
    console.log('listening on port 80');
    console.log('login with Strava: https://www.strava.com/oauth/authorize?client_id=67430&response_type=code&redirect_uri=http://localhost&approval_prompt=force&scope=activity:read_all')
  });