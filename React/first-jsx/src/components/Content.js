import React, { Component } from "react";

class List extends Component {
    render() {
        return(
            <>
            <h1>Hello Dojo</h1>
            <h2>Things I Need To Do:</h2>
            <ul>
                <li>
                    Learn React
                </li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the Dogs</li>
            </ul>
            </>
        );
    };
}
export default List;