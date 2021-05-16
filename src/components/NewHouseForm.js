import React, { useState } from "react";
// import { housesAPI } from "../rest/ThingsAPI";

//this is the component that house the form to create 
//a new house and push that to the API

export const NewHouseForm = (props) => {

    const [name, setHouseName] = useState("");

    // const handleChange = (e) => {
    //     setHouseName(e.target.value);
    // }

    // const handleAdd = () {
    //     const newHouse = 
    // }

    const onSubmit = (e) => {
        console.log("onsubmit event contents", e)
        console.log("onsubmit housename contents", name)
        e.preventDefault();
        setHouseName("");
        if(name) {
            props.addNewHouse({name});
            setHouseName("");
        } else {
            console.log("error on new house form submit");
        }

    }

    return (
        <div>
            <h4>Add a new house</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="House Name"
                    onChange={(e) => setHouseName(e.target.value)}
                    value={name}
                    />
                <button type="submit">Add House</button>
            </form>
        </div>
    )

}