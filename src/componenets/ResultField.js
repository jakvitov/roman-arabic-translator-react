import {translateArabicNumberToRoman, translateRomanNumberToArabic} from "../util_functions/Translator";
import {isString} from "@craco/craco/dist/lib/utils";

function ResultField(props) {

    let message;

    if (!props.inputNumber){
        message = "Enter number";
    }
    else {
        message = translateArabicNumberToRoman(props.inputNumber);
        if (message == null){
            message = translateRomanNumberToArabic(props.inputNumber);
        }
        if (!isString(message) && isNaN(message)){
            message = "Enter number";
        }
    }

    return <label for="inputField" id="resultField">{message}</label>
}

export default ResultField;