import {useState} from "react";
import InputField from "./InputField";
import ResultField from "./ResultField";

function Translator() {
    const [inputNumber, setInputNumber] = useState();

    return <div>
        <InputField setInputNumber={setInputNumber}/>
        <ResultField inputNumber={inputNumber}/>
    </div>

}

export default Translator;