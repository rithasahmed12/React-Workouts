function Button(){
    const handleClick = (r) => r.target.textContent = "OUCH";
   
    return(<button onDoubleClick={(r)=>handleClick(r)}>click me</button>)
}

export default Button