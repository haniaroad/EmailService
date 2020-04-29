import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


export class Email extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toName: '',
            toEmail: '',
            subject: '',
            body: ''

        }

    }

    handleData = (event) => this.setState({ [event.target.name]: event.target.value });

    handleSubmit(e) {

        e.preventDefault();

        var email = {

            toName: this.state.toName,
            toEmail: this.state.toEmail,
            subject: this.state.subject,
            body: this.state.body

        }

        const response = fetch('https://localhost:5001/api/emailservice/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email),

        })
        console.log(email);


    }

    render() {
 

        return (

            <div>

                <h1>Create Email</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <TextField id="standard-basic" placeholder="Name:" type="text" name="toName" onChange={(event) => this.handleData(event)} />
                    <br></br>
                    <TextField id="standard-basic" placeholder="To:" type="text" name="toEmail" onChange={(event) => this.handleData(event)} />
                    <br></br>
                    <input id="standard-basic" placeholder="Subject:" type="text" name="subject" onChange={(event) => this.handleData(event)} />
                    <br></br>
                    <input id="standard-basic" placeholder="Body:" type="text" name="body" onChange={(event) => this.handleData(event)} />
                    <br></br>
                    <button className="btn btn-primary" type="submit">Send</button>

                </form>

            </div>
        )

    }

}