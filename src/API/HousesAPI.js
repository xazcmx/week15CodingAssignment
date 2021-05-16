
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses"

//this is the component that handles all of the REST calls
//i was not able to get the delete function to work


class HousesAPI {

    create = async (house) => {
        console.log("create api house prop contents", house);
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(house)
                
            });
            return await resp.json();
        } catch(e){
            console.log("create error", e)
        }
    }



    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Fetch houses broke", e)
        }
    }


    put = async (house) => {
        try {
        const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log("put error", e)
        } 
    }

    delete = async (house) => {
        try {
        const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log("delete error", e)
        } 
    }


}

export const housesAPI = new HousesAPI();