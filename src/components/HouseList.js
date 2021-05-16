import React from "react";
import { House } from "./House";
import { housesAPI } from "../API/HousesAPI"
import { NewHouseForm } from "./NewHouseForm";
//this component displays the list of house components
//it also contains methods that handle the manipulation of data
//i was unable to get a delete function working for this project

export default class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesAPI.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesAPI.put(updatedHouse);
        this.fetchHouses();
    };

    createHouse = async (newHouse) => {
        console.log("new house prop contents", newHouse)
        await housesAPI.create(newHouse);
        this.fetchHouses();
    }

    addNewHouse = (house) => {
        console.log(house);
        this.createHouse({...house})};

    deleteHouse = async (id) => {
        await housesAPI.delete(id);
        this.fetchHouses();
    }

    render() {
        return(
            <div className="house-list">
                <NewHouseForm addNewHouse={this.addNewHouse} /> 
                
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        deleteHouse={this.deleteHouse}
                        
                    />
                ))}
            </div>
        );
    }
}