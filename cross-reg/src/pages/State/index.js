import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import {Button} from 'react-bootstrap'

class State extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          labels: ['Cumplimiento', 'No Cumplimiento', 'No validado', 'No aplicable'], 
          datasets: [{
              data: [12, 9, 3, 6],
              backgroundColor: ['orange', 'purple', 'green', 'red']
          }]
        };
    }

    render() {
        
        return(
            <div>
                <h1>Gráfica de estado</h1>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    height='58%     '
                />
            </div>
        )
    }
}

export default State