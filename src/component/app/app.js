import Content from '../content/content';
import Header from '../header/header';
import Nav from '../nav/nav';
import Dialogs from '../dialogs/dialogs';
import ListNews from '../listNews/listNews';
import Music from '../music/music';
import Setting from '../setting/setting';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.css';



function App(props) {
  return (
    <BrowserRouter>
          <div className="app-wrapper">
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' 
                        render={ () => <Dialogs store={props.store} 
                        />}/>
            <Route path='/content' 
                        render={ () => <Content 
                        profilePage={props.appState.profilePage} 
                        dispatch={props.dispatch}
                        updateNewPostText={props.updateNewPostText}
                        />}/>
                        
            <Route path='/listnews' render={ () => <ListNews/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/setting' render={ () => <Setting/>}/>
          </div>
        </div>
    </BrowserRouter>
  );
}
export default App;

