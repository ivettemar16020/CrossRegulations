import React, {Component} from 'react'
import nist from '../../data/nist'


class Analysis extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          similar: 0
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
                {nist.map((nistDetail, index) => {
                    return <div>
                    <h1> {nistDetail.subCat}</h1>
                    <p>{nistDetail.descripcionSubCat}</p>
                    </div>
                })} 
            </div>
        )
    }
}

export default Analysis