import Api from './api';
import React from 'react';
import ReactDOM from 'react-dom';


let userdb = {
    name:"John Does",
    city:"Dallas, TX"
}

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>Hello world!!</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

let api = new Api();
api.posts().then(data => {
    console.log(data);
});
