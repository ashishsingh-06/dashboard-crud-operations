import React from "react";

const ListItem = (props) => {

    const {item, deleteData, getEditItem, setShowDialog} = props;

    const handleDeleteClick = (index) => {
        deleteData(index)     
    }

    const handleEditClick = (index) => {
        getEditItem(index);
        setShowDialog(true);
    }
    
    return (
        <div className="row text-center">   
            <div className="col-3 border bg-light">
                <span className="edit-listItem" onClick={()=> handleEditClick(item.index)}><i className="bi bi-pencil"></i></span>
                <span className="delete-listItem" onClick={()=> handleDeleteClick(item.index)}><i className="bi bi-trash3"></i></span>
            </div>
            <div className="col-3 border bg-light">{item.name}</div>
            <div className="col-1 border bg-light">{item.age}</div>
            <div className="col-3 border bg-light">{item.city}</div>
            <div className="col-2 border bg-light">{item.gender}</div>
        </div>
    )
}

export default ListItem;