import React, {Component} from "react";
import logo from "./logo.svg";
import empDetails from "./emp_details.json";
import "./App.css";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            empDetails: empDetails.Employees,
            addView: false,
        }
    }

    addView() {
        this.setState({
            addView: true,
        });
    }

    addItem() {
        let id = Math.random() * 14;
        let newItem = {
            "userId": id.toString(),
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "tomhanks@gmail.com"
        };
        this.setState({
            addView: true,
        });
        console.log(newItem);
    }


    render() {
        let empDetails = this.state.empDetails.map(function (item, i) {
            return (<div key={i}>
                <span>
                {item.firstName}</span>
            </div>)
        });

        let addView = this.state.addView ? (
            <div className="ui six wide column">
                <div className="ui  form">
                    <div className="two fields">
                        <div className="field">
                            <label>First name</label>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>Middle name</label>
                            <input type="text" placeholder="Middle Name"/>
                        </div>
                        <div className="field">
                            <label>Last name</label>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="field">
                            <label>First name</label>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>Middle name</label>
                            <input type="text" placeholder="Middle Name"/>
                        </div>
                        <div className="field">
                            <label>Last name</label>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="ui button">Submit</div>
                </div>
            </div>) : "";

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button className="ui button" onClick={this.addView.bind(this)}>Add Item</button>
                {addView}
                {empDetails}
            </div>
        );
    }
}

export default App;
