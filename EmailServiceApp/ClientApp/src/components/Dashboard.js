import React from 'react';
import ReactDOM from 'react-dom';
import Papa from 'papaparse';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            subscribers: []
        }

        this.updateData = this.updateData.bind(this);

    }
    componentDidMount() {
        console.log("working");

        
        Papa.parse('./subscribers.csv', {
            header: true,
            delimiter: ',',
            download: true,
            skipEmptyLines: false,
            complete: this.updateData

        });
    }

    updateData(result) {
        console.log("getting called");
        console.log(result);

        this.setState({ subscribers: result });
    }

    render() {

        console.log(this.state);

        return (
            <h1>Dashboard</h1>
        );
    }
}

export default Dashboard;