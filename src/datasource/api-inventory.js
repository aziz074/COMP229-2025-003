let apiURL = import.meta.env.VITE_API_URL;
import { getToken } from "../components/auth/auth-helper"

const list = async () => {
    try {

         //test line to see if token is available
        console.log("GET TOKEN BEFORE FETCH:", getToken());

        let response = await fetch(apiURL + '/api/inventory/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (id) => {
    try {
           //test line to see if token is available
        console.log("GET TOKEN BEFORE FETCH:", getToken());

        let response = await fetch(apiURL + '/api/inventory/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const create = async (product) => {
    try {

        //test token retrieval
        console.log("GET TOKEN BEFORE FETCH:", getToken());

        let response = await fetch(apiURL + '/api/inventory/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(product)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const read = async (id) => {
    try {

        //test line to see if token is available
        console.log("GET TOKEN BEFORE FETCH:", getToken());

        let response = await fetch(apiURL + '/api/inventory/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (product, id) => {
    try {

         //test line to see if token is available
        console.log("GET TOKEN BEFORE FETCH:", getToken());


        let response = await fetch(apiURL + '/api/inventory/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(product)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { list, remove, create, read, update }