import Content from '../content/content';
import Header from '../header/header';
import Nav from '../nav/nav';
import Dialogs from '../dialogs/dialogs';
import ListNews from '../listNews/listNews';
import Music from '../music/music';
import Setting from '../setting/setting';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.css';


function App() {
  return (
    <BrowserRouter>
          <div className="app-wrapper">
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/content' component={Content}/>
            <Route path='/listnews' component={ListNews}/>
            <Route path='/music' component={Music}/>
            <Route path='/setting' component={Setting}/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
