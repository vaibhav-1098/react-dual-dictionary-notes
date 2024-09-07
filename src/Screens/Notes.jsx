import React, { useEffect, useState } from "react";

const Notes = () => {
    const [note, setNote] = useState({ text: "", done: false });
    const [list, setList] = useState([]);

    useEffect(() => {
        const savedList = localStorage.getItem("notes");
        setList(JSON.parse(savedList) || []);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
        setNote({ text: "", done: false });
    };

    const addTask = () => {
        const newList = [{ text: note.text, done: false }, ...list];
        setList(newList);
        localStorage.setItem("notes", JSON.stringify(newList));
    };

    const deleteTask = (indexNumber) => {
        if (window.confirm("Are you sure?")) {
            const newList = list.filter((item, index) => index !== indexNumber);
            setList(newList);
        }
    };

    const deleteAll = () => {
        if (window.confirm("Do you want to delete all Notes?")) {
            setList([]);
        }
    };

    const toggleCheckbox = (index) => {
        const newList = [...list];
        newList[index].done = !newList[index].done;
        setList(newList);
    };

    return (
        <div className="container mt-4">
            <form onSubmit={(e) => handleSubmit(e)} className="mb-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type note"
                        value={note.text}
                        onChange={(e) => setNote({ text: e.target.value, done: false })}
                        maxLength="140"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>

            {list.length !== 0 ? (
                <button onClick={deleteAll} className="btn btn-warning mb-3 mx-auto d-block">
                    Delete All
                </button>
            ) : null}

            {list.length === 0 ? (
                <p className="text-muted text-center">Your notes are Empty</p>
            ) : null}

            <div className="row">
                {list.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 mb-3">
                        <div className={`card ${item.done ? "bg-info" : ""}`}>
                            <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        checked={item.done}
                                        onChange={() => toggleCheckbox(index)}
                                    />
                                    <label className="form-check-label">{item.text}</label>
                                </div>
                                <button
                                    className="btn btn-danger btn-sm ms-auto"
                                    onClick={() => deleteTask(index)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
