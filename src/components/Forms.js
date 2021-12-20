import React, {useState} from 'react';

const Forms = (props) => {

    const [text, setText] = useState("");
    const {tasks, setTasks} = props;

    const submitting = (e) => {
        e.preventDefault()

        setTasks([...tasks, {
            text: text,
            checked: false
        }])

        setText("");
    }
    return(
        <div>
            <h1>Task List</h1>
            <form onSubmit={ submitting }>
                <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Forms