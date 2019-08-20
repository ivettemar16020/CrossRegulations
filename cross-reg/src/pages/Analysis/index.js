import React, {Component} from 'react'
import nist from '../../data/nist'
import {Pie} from 'react-chartjs-2'

class Analysis extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          similar: 5, 
          diferente: 8,
          labels: ['Similares', 'Diferentes'], 
          datasets: [{
              data: [5, 8],
              backgroundColor: ['orange', 'purple']
          }]
        };
    }

    componentDidMount() {
        console.log("working"); 
    }

    checkValue = (keyVal) => {
        const i = 0;
        if(keyVal == null)
           i += 1
        return i;
     }

    render() {
        
        return(
            <div>
                <h1>Gráfica comparativa</h1>
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

export default Analysis

/*

{nist.map((nistDetail, index) => {
                    return <div>
                    <h1> {nistDetail.subCat}</h1>
                    <p>{nistDetail.descripcionSubCat}</p>
                    </div>
                })} 

*/