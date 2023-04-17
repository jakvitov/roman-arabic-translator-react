function ResultField(props) {

    let message;

    if (!props.inputNumber){
        message = "Enter number"
    }
    else {
        message = props.inputNumber;
    }

    return <label for="inputField" id="resultField">{message}</label>
}

export default ResultField;