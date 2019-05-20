import React, { Component, useState } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 1, 2019',
            newDeadline: '',
        }
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className='App'>
                <div className='App-title'>Countdown to { this.state.deadline }</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        placeholder="new date"
                        onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;

