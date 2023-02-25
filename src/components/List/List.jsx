import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
    
    const {items, deleteData, getEditItem, setShowDialog} = props;

    return (
        <div>
            <div className="row text-center">   
                <div className="col-3 border bg-dark text-white">Action</div>
                <div className="col-3 border bg-dark text-white">Name</div>
                <div className="col-1 border bg-dark text-white">Age</div>
                <div className="col-3 border bg-dark text-white">City</div>
                <div className="col-2 border bg-dark text-white">Gender</div>
            </div>
            <div className="text-center">
            {
                items.length ? items.map((item,index) => <ListItem key={index} item={{...item,index}} deleteData={deleteData} getEditItem={getEditItem} setShowDialog={setShowDialog}></ListItem>) : <h4 className="mt-5">No Data Available</h4>
            }
            </div>
        </div>
    )
}

export default List;