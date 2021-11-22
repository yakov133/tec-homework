function LongText (props){

    return<div style={{textAlign:"center"}}>
        {
            props.text.length<5?<h2 style={{color:"green"}}>{props.text}</h2> : <h2 style={{color:"red"}}>{props.text}</h2>
        }
    </div>
}
export default LongText;