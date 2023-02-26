import React, { useCallback, useEffect, useState } from "react";

const Popup = (props) => {

    const {showDialog, setShowDialog, postData, putData, editItem} = props;
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        city: '',
        gender: ''
    });

    const handleFormChange = useCallback((e)=>{
        const name = e.target.name;
        setFormData((formData)=>({...formData, [name] : e.target.value}));
    },[]);

    const handleCloseDialogClick = () => {
        clearFormData();
        setShowDialog(false);
    }

    const handleSaveDialogClick = () => {
        postData(formData);
        clearFormData();
        setShowDialog(false);
    }

    const clearFormData = () => {
        setFormData({
            name: '',
            age: '',
            city: '',
            gender: ''
        });
    }

    useEffect(()=>{
        setFormData({
            name: editItem.name,
            age: editItem.age,
            city: editItem.city,
            gender: editItem.gender
        })
    },[editItem])

    return(
        <div>
            {showDialog ? (<div className="popup">
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Data</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseDialogClick}></button>
                            </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-3" placeholder="Enter Name" name="name" value={formData.name} onChange={(e)=>handleFormChange(e)}/>
                            <input type="number" className="form-control mb-3" placeholder="Enter Age" name="age" value={formData.age} onChange={(e)=>handleFormChange(e)}/>
                            <input type="text" className="form-control mb-3" placeholder="Enter City" name="city" value={formData.city} onChange={(e)=>handleFormChange(e)}/>
                            <select className="form-select" name="gender" value={formData.gender} onChange={(e)=>handleFormChange(e)}>
                                <option selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseDialogClick}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSaveDialogClick}>Save</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>) : null }
        </div>
    )
}

export default Popup;