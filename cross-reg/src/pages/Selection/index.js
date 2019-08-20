import React, { Component } from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import xlsxParser from 'xlsx-parse-json';
import { Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
import './selection.css';

class Selection extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null, 
      parsed: null
    }
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.openNewPage = this.openNewPage.bind(this);
    this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows,
            parsed: JSON.parse(JSON.stringify(resp))
          });
        }
        console.log(this.state.parsed );
      }); 
  }
  

  fileHandler = (event) => {    
    if(event.target.files.length){
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      
      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      }    
      else{
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }         
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openFileBrowser = () => {
    this.fileInput.current.click();
  }

  openNewPage = (chosenItem) => {
    const url = chosenItem === "github" ? "https://github.com/ashishd751/react-excel-renderer" : "https://medium.com/@ashishd751/render-and-display-excel-sheets-on-webpage-using-react-js-af785a5db6a7";
    window.open(url, '_blank');
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
          <p>Selecciona el nombre del estándar, regulación o marco legal </p>
            <select className="mdb-select colorful-select dropdown-primary md-form" multiple searcable="Buscar">
              <option value="1">Acuerdo No.006-2011</option>
              <option value="1">NIST - Cybersecurity Framework</option>
              <option value="1">GDC (República Dominicana)</option>
              <option value="1">PCI</option>
              <option value="1">ISO-27000</option>
            </select>
          </div>
        </div>
        <Container>
        <form>
          <FormGroup row>
            <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg">Subir archivo .xlsx</Label>          
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="info" style={{color: "black", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Buscar en archivos de sistema&hellip;</Button>
                  <input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />                                
                </InputGroupAddon>
                <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                              
                <FormFeedback>    
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                    CONDICIÓN: Selecciona archivos .xlsx únicamente
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>   
        </form>

        {this.state.dataLoaded && 
        <div>
          <Card body outline color="secondary" className="restrict-card">
            
              <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            
          </Card>  
        </div>}
        </Container>
      </div>
    );
  }
}

export default Selection;