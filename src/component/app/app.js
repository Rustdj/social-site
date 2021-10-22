import Content from '../content/content';
import Header from '../header/header';
import Nav from '../nav/nav';
import Dialogs from '../dialogs/dialogs';
import ListNews from '../listNews/listNews';
import Music from '../music/music';
import Setting from '../setting/setting';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.css';
import { addPost } from '../../redux/state';


function App(props) {
  return (
    <BrowserRouter>
          <div className="app-wrapper">
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' 
                        render={ () => <Dialogs state={props.appState.dialogPage} 
                        state={props.appState.messagesPage}/>}/>
            <Route path='/content' 
                        render={ () => <Content state={props.appState.profilePage} addPost={props.addPost}/>}/>
                        
            <Route path='/listnews' render={ () => <ListNews/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/setting' render={ () => <Setting/>}/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
