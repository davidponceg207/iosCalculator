import { useState } from "react"

export const useCalculator = () => {

    const [number, setNumber] = useState('0');

    const clean = () => {
        setNumber('0')
    };

    const deleteOperation = () => {

        if(number === '0') {
            return;
        }

        if(number.length === 1) {
            return setNumber('0')
        }

        return setNumber( number.slice(0, -1));
    };

    const toggleSign = () => {
        if( number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        setNumber('-' + number)
    }

    const buildNumber = (numberString: string) => {

        if( number.includes('.') && numberString === '.') return;

        if( number.startsWith('0') || number.startsWith('-0')) {

            if(numberString === '.') {
                return setNumber(number + numberString);
            }


            if( numberString === '0' && number.includes('.')) {
                return setNumber( number + numberString);
            }


            if( numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }


            if( numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }

        setNumber( number + numberString)
    }

    return {
        // Properties
        number,

        // Methods
        buildNumber,
        toggleSign,
        clean,
        deleteOperation
    }
}
