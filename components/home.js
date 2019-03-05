import React from 'react'
import ReactDOM from 'react-dom'
import { PersonFindComponent } from './persons.find.component'

import { getNearByPersons } from '../services.persons.service'
export class HomeComponent extends React {
  
    render(){
 
                return(
                      <div>
                       <PersonFindComponent />
                    </div>
                );
    }

    
} 

ReactDOM.render(<HomeComponent />, document.getElementById('persons'));
