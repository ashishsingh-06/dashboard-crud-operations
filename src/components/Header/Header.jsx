import React, { useEffect } from "react";

const Header = (props) => {
    
    const {setShowDialog} = props;

    const handleAddDataClick = () => {
        setShowDialog(true);
    }

    useEffect(()=>{
        console.log('Header render');
    })

    return (
        <div className="d-flex justify-content-between p-2">
            <h2>Dashboard</h2>
            <button type="button" className="btn btn-primary fs-6" onClick={handleAddDataClick}>Add Data</button>
        </div>
    )
}

export default Header;