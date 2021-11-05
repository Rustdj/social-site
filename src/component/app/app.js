import Content from '../content/content';
import Header from '../header/header';
import Nav from '../nav/nav';
import DialogsContainer from '../dialogs/dialogs';
import ListNews from '../listNews/listNews';
import Music from '../music/music';
import Setting from '../setting/setting';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from '../Users/UsersContainer';

import './app.css';




function App(props) {
  return (
    <BrowserRouter>
          <div className="app-wrapper">
          <Header/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' 
                        render={ () => <DialogsContainer   
                        />}/>
            <Route path='/content' 
                        render={ () => <Content />}/> 
            <Route path='/users' 
                        render={ () => <UsersContainer />}/>         
            <Route path='/listnews' render={ () => <ListNews/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/setting' render={ () => <Setting/>}/>
          </div>
        </div>
    </BrowserRouter>
  );
}
export default App;

