import React from 'react';
import moment from 'moment';

import { Card, CardContent, Typography, Grid } from '@mui/material';
import DashboardData from './DashboardData';
import './Dashboard.css';

const Dashboard = () => {

  const formattedTime = (ms) => {
    return  moment('2000-01-01 00:00:00').add(moment.duration(ms)).format('HH:mm:ss');
  }

  return (
    <Grid className='dashboard' container spacing={3}>
      <Grid item xs={12} sm={4} >
        <Card >
          <CardContent >
            <Typography className='title'  variant="h5" component="h2">
              Ad with Must Clicks
            </Typography>
            { DashboardData.adWithMustClicks.clicks > 1000 ?
              <div className='value'>{parseInt(DashboardData.adWithMustClicks.clicks / 1000)}K</div> :
              <div className='value'>{DashboardData.adWithMustClicks.clicks}</div>
            }
            <div>{DashboardData.adWithMustClicks.ad} Ad</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Card >
          <CardContent >
            <Typography className='title'  variant="h5" component="h2">
              Longest Stay On Website
            </Typography>
              <div className='value'>{formattedTime(DashboardData.timeOnWebsite)}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Card >
          <CardContent>
            <Typography className='title'  variant="h5" component="h2">
              Longest Stay On Page
            </Typography>
            <div className='value'>{formattedTime(DashboardData.timeOnPage.time)}</div>
            <div>{DashboardData.timeOnPage.page} Page</div>

          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Chart 1
            </Typography>
            {/* <LineChart /> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Chart 2
            </Typography>
            {/* <BarChart /> */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
