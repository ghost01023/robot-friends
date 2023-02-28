import React, {Component} from 'react';
// import {ROBOTS} from "./robots";
import SearchBox from "../components/SearchBox";
import CARD_LIST from "../components/cardList";
import "../index.css"
import Scroll from "../components/scroll-comp";
import Loading from "../components/loading";

window.$holloway = "hello, how are you on this fine day, sir?"

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: "",
        }
    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value})
    }

    logScroll = (arr) => {
        arr.push(document.querySelector(".scroll-div").scrollTop)
        console.log(arr)
        return (arr[arr.length - 2] === arr[arr.length - 1])
    }

    scrollRobots = (event) => {
        window.scrollTo(0, 35.3333);
        let a = [event.target.scrollTop];
        let result = setTimeout(this.logScroll(a), 2000);
        if (result === true) {
            if (event.target.scrollTop === 0) {
                console.log("yes!!")
                window.scrollTo(0, 0)
            }
        }
    }
    render = () => {
        const {robots, searchField} = this.state;
        const FilteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (!robots.length ? <Loading/> :
                <div>
                    <h1 className={"header"}>Machine Men</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll scrollSmooth={this.scrollRobots}>
                        <CARD_LIST ROBOTS={FilteredRobots}/>
                    </ Scroll>

                </div>
        )
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                return (this.setState({robots: users}))
            })
    }
}

export default App