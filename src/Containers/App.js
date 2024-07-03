import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
// import { robots } from './robots'; disabled to pick data automatically through json placeholder users resource
import './App.css';

// STATE >> props
// const state = {
//     robots: robots,
//     searchfield: ''
// move it into class component>constructor }

// const App = () => {
//inorder to use state, we've to go for original way of creating react app using class component
class App extends Component {//smart components as this has class syntax & STATE 
    constructor() {
        super()//used in advanced js, calls constructor of componet
        this.state = {//state can change & effect App
            robots: [],//replaced [robots] with [] to make data dynamic based on user input with fetch method
            searchfield: ''
        }
        // console.log('1'); to test which method is running in browser first
        // console.log('constructor');
    }

    componentDidMount() { //comes with react no need to use arrow function
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    //         .then(response => { compress below code by removing return & {} & replaced above
    //             return response.json();
    //         })
    //         .then(users => {
    //             this.setState({ robots: users });
    //         })
    // }
    // console.log('2');
    // console.log('componentDidMount');

    onSearchChange = (event) => {//not comes with react used arrow function
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const { robots, searchfield } = this.state;//destructuring everywhere to variables ex: this.state.robots = robots
        const filteredRobots = robots.filter(robot => {//cleaning by replacing robots with robot for meaningful
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // console.log('3');
        // console.log('render') re-renders when component loads on browser;
        // console.log(filteredRobots);
        // if (robots.length === 0) {
        // if (!robots.length) {//false - true 
        //     return <h1>Loading</h1>//return Loading if there are 0 users
        // } else {//return below components if users are more than 0
        //     return (
        return !robots.length ?//simplified above to ternary operator
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1 bg-light-blue dib br3 pa3 ma2 grow pointer'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;