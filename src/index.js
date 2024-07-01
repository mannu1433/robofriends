import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';//same folder for ./
// import App from './App';//if there is no type .js/css/html. It assumes .js
// import Hello from './Hello';//if there is no type .js/css/html. It assumes .js
// import Card from './Card';
// import CardList from './CardList.js' - when proj is almost done, create app component & move all components into it
import App from './Containers/App';
import 'tachyons';
// import { robots } from './robots';

import registerServiceWorker from './registerServiceWorker';
// import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);

// <CardList robots = {robots}/> proj is almost done, moved to app component
// {/* <div>
// <Card id ={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// <Card id ={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// <Card id ={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// </div> */}
// ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'}/>, document.getElementById('root'));
// root.render(<Hello greeting={'Hello React Ninja'}/>, document.getElementById('root'));
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

