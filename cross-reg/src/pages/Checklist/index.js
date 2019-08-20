import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid';
import { Editors } from "react-data-grid-addons";
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
    { key: "relacion", name: "Relacion con Acuerdo 006", editable: true },
    { key: "cumplimiento", name: "Cumplimiento",  editor: IssueTypeEditor  }, 
    { key: "comentario", name: "Comentario",  editable: true  }
  ];
  
  const rows = [
    { key: 0, 
        funcion: "1. Identificar", 
        categoria: "1. Gestion de activos", 
        descripcionCat: "Los datos, el personal, los dispositivos, los sistemas y las instalaciones que permiten a la organización alcanzar los objetivos empresariales se identifican y se administran de forma coherente con su importancia relativa para los objetivos organizativos y la estrategia de riesgos de la organización.", 
        subCat:"ID.AM-1",
        descripcionSubCat: "Los dispositivos y sistemas físicos dentro de la organización están inventariados", 
        relacion: "Ninguna", 
        cumplimiento: "En cumplimiento"},
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
  ];

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
            rowsCount={3}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
          />
        );
    }
}

export default Checklist

