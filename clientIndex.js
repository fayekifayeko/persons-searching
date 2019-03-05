import React from 'react'
import ReactDOM from 'react-dom'
import { PersonFindComponent } from './components/persons.find.component'

import { getNearByPersons } from './services/persons.service'
export class HomeComponent extends React.Component {
  
    render(){
 
                return(
                      <div>
                       <PersonFindComponent />
                    </div>
                );
    }

    
} 

ReactDOM.render(<HomeComponent />, document.getElementById('persons'));