import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import List from "../List/List";
import Popup from "../popup/Popup";

const Dashboard = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState({
        name: '',
        age: '',
        city: '',
        gender: '',
        edit: false,
        index: -1,
    });

    const getData = () => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }

    const postData = (obj) => {
        if(editItem.edit) {
            putData(editItem.index, obj);
        } else {
            let postData = [...items];
            postData.push(obj);
            localStorage.setItem('items', JSON.stringify(postData));
            setToggle(!toggle);
        }
    }

    const deleteData = (index) => {
        let filterData = items.filter((item,i) => i !== index);
        localStorage.setItem('items', JSON.stringify(filterData));
        setToggle(!toggle);
    }
    
    const getEditItem = (index) => {
        let filterData = items.filter((item, i) => i === index);
        console.log(filterData[0]);
        setEditItem({...filterData[0], edit: true, index: index});
    }

    const putData = (index, obj) => {
        let data = [...items];
        data.forEach((item,i) => {
            if(i == index) {
                data[index] = {...obj};
            }
        });
        localStorage.setItem('items', JSON.stringify(data));
        setToggle(!toggle);
    }

    useEffect(()=>{
        getData();
    },[toggle]);

    return (
        <div>
            <Header setShowDialog={setShowDialog}></Header>
            <List items={items} deleteData={deleteData} getEditItem={getEditItem} setShowDialog={setShowDialog}></List>
            <Popup showDialog={showDialog} setShowDialog={setShowDialog} postData={postData} putData={putData} editItem={editItem}></Popup>
        </div>
    )
}

export default Dashboard;