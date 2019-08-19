import React, {Component} from 'react'
import nist from '../../data/nist'

class Analysis extends Component{
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