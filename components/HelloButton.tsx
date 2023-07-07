const helloButton = (message: string = "I am the hello button", display: string = "hello") => {
    return(<>
        <div>
            <button onClick={() => {console.log(message)}}>{display}</button>
        </div>
    </>)
}

export default helloButton