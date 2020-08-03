import React from 'react';
//import styles from './styles.module.css';
import {Meme} from '../Meme/Meme';
import {Switch,Route} from 'react-router-dom';
import {MemeGenerated} from '../MemeGenerated/MemeGenerated';

export const App = ()  =>{
  return (
    <div>
    <h1>Meme Creator</h1>
	<Switch>
    <Route path='/' exact>
    <Meme />
    </Route>
    <Route path='/generated'>
    	<MemeGenerated />
    </Route>
    </Switch>
    </div>
  );
}


