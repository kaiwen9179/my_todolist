import React, { Component, useState, useRef } from "react"
import { ListItemStore } from '../../store/ListItemStore';

const ListItem = () => {

    const ListStore = ListItemStore();

    const inputEditRef = useRef(null);

    const [EditText, setEditText] = useState({});

    const TodoChange = (e) => {

        // console.log(e.target.value );
        // setEditText({ value: e.target.value });
        // console.log(EditText.value );
    };

    const DelTodoItems = (Listid) => {

        const Items = [...ListStore.storeListItems];

        let i;
        let i_remove;
        let len;
        for (i = 0, len = Items.length; i < len; i++) {

            if (Items[i].id === Listid) {
                i_remove = i;
            }
        }

        Items.splice(i_remove, 1);

        ListStore.setStoreListItems(Items)

        console.log(Items);

    };

    const EditTodoItems = (Listid,txt_id) => {

        //const Items = [...props.items];
        const Items = [...ListStore.storeListItems];

        let i;
        let len;
        for (i = 0, len = Items.length; i < len; i++) {

            if (Items[i].id === Listid) {
                Items[i].data =  document.getElementById(txt_id).value
            }
        }

        ListStore.setStoreListItems(Items)

        console.log(Items);

    };


    const TodoItems = (props) => {

        const { items } = props;

        return (

            <table className='ListContent'>
                <tbody>
                    {
                        items.map((list) =>
                            <tr>
                                <td id={list.id}>{list.data}</td>
                                <td><input type="text" id={modifyId('txt_', list.id)} style={{ display: 'none' }} onChange={(event)=>TodoChange(event)} /></td>
                                <td>
                                    <input
                                        type="button" id={modifyId('btn_', list.id)} value="編輯"
                                        onClick={() => openEdit(modifyId('txt_', list.id), modifyId('btn_', list.id), modifyId('btnE_', list.id))}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="button" id={modifyId('btnE_', list.id)} value="結束編輯" style={{ display: 'none' }}
                                        onClick={() => closeEdit(list.id, modifyId('txt_', list.id), modifyId('btn_', list.id), modifyId('btnE_', list.id))}
                                    />
                                </td>
                                <td><input type="button" value="刪除" onClick={() => DelTodoItems(list.id)} /></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        )

    };

    const openEdit = (txt_id, btn_id, btnE_id) => {

        document.getElementById(txt_id).style.display = ''
        document.getElementById(btn_id).style.display = 'none'
        document.getElementById(btnE_id).style.display = ''

    };

    const closeEdit = (Listid, txt_id, btn_id, btnE_id) => {

        document.getElementById(txt_id).style.display = 'none'
        document.getElementById(btn_id).style.display = ''
        document.getElementById(btnE_id).style.display = 'none'

        EditTodoItems(Listid,txt_id);

    };

    const modifyId = (type, id) => {

        const newclassName = type + id;

        return (

            newclassName
        )

    };

    return (
        <div >
            <h1 className='ListTitle'>我的清單：</h1>
            <TodoItems items={ListStore.storeListItems} />
        </div>
    );

};

export default ListItem;