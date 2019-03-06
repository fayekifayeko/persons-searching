import React from 'react'
import { getNearByPersons } from '../services/persons.service'
export class PersonFindComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
               const persons = this.state.persons.map((person, index) =>{
                    return(
                        <li key={index}>
                            <span className={person.available}></span>
                            <span className="first-name">{person.firstName}</span>
                            <span className="last-name">{person.lastName}</span>
                            <span className="dist">{Math.floor(person.dis / 1000)} km</span>
                        </li>
                    );
                });
                return(
                      <div id="person-container">
                        <form id="search" onSubmit={this.handleSubmit}>
                            <label>Enter your Latitude:</label>
                            <input type="text" ref="lat" placeholder="latitude" required />
                            <label>Enter your Longitude:</label>
                            <input type="text" ref="lng" placeholder="longitude" required />
                            <input type="submit" value="Find Persons" />
                        </form>
                        <ul>{persons}</ul>
                    </div>
                );
    }

    handleSubmit(e) {
        e.preventDefault();
        var lng = this.refs.lng.value;
        var lat = this.refs.lat.value;
        getNearByPersons(lng, lat)
        .then(persons => {
             this.setState({
                        persons: persons
                    });
        })
        .catch(error => console.log('can not get persons'));
    }
    
} 
