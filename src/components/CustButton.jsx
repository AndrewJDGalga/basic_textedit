
function CustButton({id, inner, func}){
    return (
        <button id={id} onClick={func}>{inner}</button>
    )
}

export default CustButton