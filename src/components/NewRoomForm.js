import React, { useState } from "react";

//this is the component that contains the form for adding
//rooms to the houses, it handles the state change of input

export const NewRoomForm = (props) => {
    const [name, setName] = useState("");
    const [area, setArea] = useState("");

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : "");
    }

    const onSumbit = (e) => {
        e.preventDefault();
        setArea("");            
        if (name && area) {
            props.addNewRoom({name, area});
            setName("");
        } else {
            console.log("invalid input");
        }
    };
    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSumbit}>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                <input 
                type="text"
                placeholder="area"
                onChange={handleAreaInput}
                value={area}
                />
                <button type="submit">Add Room</button>
            </form>
        </div>
    )

};