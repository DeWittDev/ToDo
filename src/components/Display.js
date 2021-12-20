import React from 'react';

const Display = (props) => {
    
    const {tasks, setTasks} = props
    const complete = (t) => {
        t.checked = !t.checked;
        let update = [...tasks];
        setTasks(update);
    }

    const deleting = (t) => {
        setTasks(
            tasks.filter((v) => {
                return v.text !== t;
            })
        )
    }

    const check = (checked) => {
        if(checked === true) {
            return "done"
        }
    }

    return(
        <div>
            {tasks.map((t, index) => (
                <div key={index}>
                    <p className={check(t.checked)}>{t.text}</p>
                    <input type='checkbox' onChange={(e) => complete(t)} />
                    <button onClick={(e) => deleting(t.text)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Display