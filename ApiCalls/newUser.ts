import { faction } from "@/types/faction"
import { NewUserOutput } from "@/types/newUser"
import axios from "axios"

export const newUser = async (symbol: string, faction: faction): Promise<NewUserOutput> => {
    let newUserOutput: NewUserOutput = {} as NewUserOutput
    try {
        newUserOutput = (await axios.post("https://api.spacetraders.io/v2/register", {symbol, faction}, {headers: {"Content-Type": "application/json"}})).data.data
    } catch (error) {
        console.error("error creating new user ", error)
    } finally {
        return newUserOutput
    }
}

const personalToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS1JBWlpJRUZSIiwiaWF0IjoxNjg0NDQ4NjEzLCJzdWIiOiJhZ2VudC10b2tlbiJ9.e5r2CfIeoNuZ1DUO-Xeuv_-ILqftqf7W4h_Tw0s1lH6mfmv-HU3O6jf5fnovQoxqZA0TX_G1KDdD5AAs6LrrhVVYyMW7dBkv9herwpj9NTOF5-5CQFBbdTqm_adONPQX_NSOxhpPChfxIjnXsnGgj6L-DQVd1hczSVwNFtg7VxGvWkz6iQPYChxPbTLVKxapknCGqYdSxre253mBhnzNjPbI46OcrowZ_B1He21zjeMymBay0Sh7xR6OHjLvMFeBeB-1MXkNdI5iVQWaqhI4BM-mtiSEDh9ehWpD69591GlFdoFuV0hGjEEhi51-q-m7_30Eh9qKKglw_BAnTnodrA"