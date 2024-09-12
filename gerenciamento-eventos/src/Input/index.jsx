const Input = (props) => {
    return <input value={props.value} type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} required onChange={props.onChange}/>
}
export default Input;