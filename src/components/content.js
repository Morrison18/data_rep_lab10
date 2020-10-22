import React from 'react';
import '../App.css';
// class component that displays the current time
export class Content extends React.Component {


    render() {
        return (
            <div>
                <h1>
                    Hello World!
                </h1>
                <h2>
                    It is {new Date().toLocaleTimeString()}.
                    </h2>
            </div>
        );
    }
}
