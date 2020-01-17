import React from "react"
import { InputTasksForm } from "../InputTasksForm"

const InputTask = () => {

    return (
        <div>
            <div class="inputTaskTitle">
                <input type="checkbox" class="taskChk" />
                <input type="text" class="taskTitle" placeholder="Type Something Here…" />
            </div>
            <button type="button"> Cancel</button>
            <button type="button"> Save</button>
        </div>

    );
};

export default InputTask;
