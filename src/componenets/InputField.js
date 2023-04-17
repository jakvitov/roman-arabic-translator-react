function InputField(props) {

    function handleChange(e){
        props.setInputNumber(e.target.value);
    }

    return <input type="text" id="inputField" aria-label="Enter number" onChange={handleChange}/>;

}
export default InputField;