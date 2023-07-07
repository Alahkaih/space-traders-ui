import React, { useState } from 'react'
import { Button, TextField } from "@mui/material"
import { newUser } from '@/ApiCalls/newUser'
import { NewUserOutput } from '@/types/newUser'
import helloButton from '@/components/HelloButton'

const About = () => {
    const [newUserToken, setNewUserToken] = useState<NewUserOutput>()
    const [newUserSymbol, setNewUserSymbol] = useState<string>()
    console.log({newUserSymbol, newUserToken})
    return (
        <div>
            <div> 
                <h1>This is not about you</h1>
                <p>This is about US.</p>
                {`your current token is ${newUserToken?.token}`}
            </div>

            {helloButton()}
            {helloButton("No i am the hello button", "mrButton")}
            <br />
            <br />
            <h1>Hello</h1>
            <h2>Bob</h2>
            <Button variant="outlined">Hello</Button>
            <button>lowercaseButton</button>
            <TextField id="outline-basic" label="Token" variant="filled" />
            <TextField id="outline-basic" label="Symbol" variant="outlined" onChange={(event) => setNewUserSymbol(event.target.value)} />
            <Button variant="outlined" onClick={async () => newUserSymbol && setNewUserToken(await newUser(newUserSymbol, "VOID"))}>New User</Button>
        </div>
    )
}

export default About