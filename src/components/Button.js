
function Button(props) {
    
    const handleClick = () => {

    }

    return(
        <>
            <Button onclick={handleClick} style={{backgroundColor : props.backgroundColor}}> {props.text}</Button>
        </>
    )
}

export { Button }