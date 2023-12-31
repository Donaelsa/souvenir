import React,{useEffect, useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import memories from './images/memories.png';

import getPosts from './actions/posts.js';
import Posts from './components/Posts/posts.js';
import Form from './components/Form/form.js';




const App=()=>{
  const [currentId, setCurrentId]=useState(null);
  const classes=useStyles();
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(getPosts());
  },[currentId,dispatch])
    return(
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position='static' color='inherit'>
           <Typography className={classes.heading} varient='h2' align='center'>Souvenir</Typography>
           <img className={classes.image}  src={memories} alt="souvenir" height="60"></img>
          </AppBar>
          <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm={7}>
                   <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                   <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
               </Grid>
            </Container>
          </Grow>
        </Container>
    )
}

export default App;