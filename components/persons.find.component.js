import React from 'react'
import { getNearByPersons } from '../services.persons.service'
export class PersonFindComponent extends React {
    constructor(props) {
        this.state = {
            persons: []
        }
    }

    render(){
 var persons = this.state.persons;
                persons = persons.map(function(person, index){
                    return(
                        <li key={index}>
                            <span className={person.obj.available}></span>
                            <span className="first-name">{ninja.obj.firstName}</span>
                            <span className="last-name">{ninja.obj.lastName}</span>
                            <span className="dist">{Math.floor(persons.dis / 1000)} km</span>
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
                            <input type="submit" value="Find Ninjas" />
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
        .then(function(persons) {
             this.setState({
                        persons: persons
                    });
        })
        .catch(error => console.log('can not get persons'));
    }
    
} 
