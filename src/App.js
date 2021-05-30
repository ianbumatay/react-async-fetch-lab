// create your App component here 



import React, {Component} from 'react' 

class App extends Component {  


    state = {
        people: []
    } 


    render(){ 
        console.log("people:", this.state.people) 
        return(
            <div>
                {this.state.people.map( person =>  <ul>{person.name}</ul> )}
            
            </div>
        )
    } 

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json()) 
        .then(data => {
            this.setState({
                people: data.people
            })
        })
    }

} 

export default App;


