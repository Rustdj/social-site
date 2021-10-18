import Content from '../content/content';
import Header from '../header/header';
import Nav from '../nav/nav';

import './app.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Content/>
      
    </div>
  );
}

export default App;
