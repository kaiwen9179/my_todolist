import React, { Component, useState, useRef } from "react"
import TopBlock from "../TopBlock/TopBlock"
import AddItem from "../AddItem/AddItem"
import ListItem from "../ListItem/ListItem"
import { ListItemContextProvider } from '../../store/ListItemStore';

const Main = () => {

    return (
        <div >
            <ListItemContextProvider>
                <TopBlock />

                <AddItem />

                <ListItem />
            </ListItemContextProvider>
        </div>
    );

};

export default Main;