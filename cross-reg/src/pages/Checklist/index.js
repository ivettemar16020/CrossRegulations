import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid';
import { Editors } from "react-data-grid-addons";
import nist from '../../data/nist'
import PageGuide from "./PageGuide";

const { DropDownEditor } = Editors;
const issueTypes = [
  { id: "cumplimiento", value: "En cumplimiento" },
  { id: "nocumplimiento", value: "No cumplimiento" },
  { id: "novalidado", value: "No validado" }, 
  { id: "noaplica", value: "No aplicable" }
];
const IssueTypeEditor = <DropDownEditor options={issueTypes} />;

const columns = [
    { key: "funcion", name: "Funcion", editable: false },
    { key: "categoria", name: "Categoria", editable: false },
    { key: "descripcionCat", name: "Descripcion de Categoria", editable: false }, 
    { key: "subCat", name: "Subcategoria", editable: false },
    { key: "descripcionSubCat", name: "Descripcion de Subcategoria", editable: false },
    { key: "relación", name: "Relacion con Acuerdo 006", editable: true },
    { key: "cumplimiento", name: "Cumplimiento",  editor: IssueTypeEditor  }, 
    { key: "comentario", name: "Comentario",  editable: true  }
  ];
  
  const rows = nist;

class Checklist extends Component{
    state = { rows };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
          const rows = state.rows.slice();
          for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
          }
          return { rows };
        });
      };
      render() {
        return (
          <ReactDataGrid
            columns={columns}
            rowGetter={i => this.state.rows[i]}
            rowsCount={50}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
          />
        );
    }
}

export default Checklist

