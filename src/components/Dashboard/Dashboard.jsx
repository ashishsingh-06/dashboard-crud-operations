import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import List from "../List/List";
import Popup from "../popup/Popup";

const Dashboard = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [items, setItems] = useState([]);

    const getData = () => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }

    const postData = (obj) => {
        let postData = [...items];
        postData.push(obj);
        localStorage.setItem('items', JSON.stringify(postData));
        setToggle(!toggle);
    }

    const deleteData = (index) => {
        let filterData = items.filter((item,i) => i !== index);
        localStorage.setItem('items', JSON.stringify(filterData));
        setToggle(!toggle);
    }
    
    const getEditItem = (index) => {
        let filterData = items.filter((item, i) => i === index);
        console.log(filterData[0]);
    }

    const putData = (index, obj) => {
        let data = [...items];
        data.forEach((item,i) => {
            if(i == index) {
                item = {...obj};
            }
        });
        console.log(data);
    }

    useEffect(()=>{
        getData();
    },[toggle]);

    return (
        <div>
            <Header setShowDialog={setShowDialog}></Header>
            <List items={items} deleteData={deleteData} getEditItem={getEditItem} setShowDialog={setShowDialog}></List>
            <Popup showDialog={showDialog} setShowDialog={setShowDialog} postData={postData} putData={putData}></Popup>
        </div>
    )
}

export default Dashboard;