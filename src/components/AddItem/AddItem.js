import React, { Component, useState, useRef } from "react"
import { ListItemStore } from '../../store/ListItemStore';

const ListItem = () => {

    const inputRef = useRef(null);

    const ListStore = ListItemStore();
    const { setStoreListItems } = ListItemStore();

    const AddTodoItems = () => {

        const Items = [...ListStore.storeListItems];
        Items.push({
            id: Items.length + 1,
            data: inputRef.current.value
        });

        setStoreListItems(Items);

    };

    return (

        <div className='AddList'>
            <input
                type="text"
                id="todoText"
                ref={inputRef}
            />

            <input type="button" value="新增" onClick={AddTodoItems} />
        </div>
    );

};

export default ListItem;