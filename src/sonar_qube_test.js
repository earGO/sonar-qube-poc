
export function sonarTest(string1, string2){
    if(string1==string2){
        return "equal strings"
    } else {
        return 'not equal'
    }
}

export function sonarTrigger2(stringparameter){
    let result = stringparameter=+1
    return result
}

export function sonarTestThree(stringRoot, stringToAdd) {
    const result = undefined;
    if (stringRoot && stringToAdd && stringToAdd != 2) {
        result =+ stringRoot
        result =+ stringToAdd
        result =+ stringToAdd
    }
    return result
}

export function andThenSomeMore(parameter1, parameter2) {
    const result = undefined;
    const criteria = undefined;

    if (parameter1 == parameter2) {
        criteria = true
        console.log('surprise')
    }
    result = criteria ? 1 : 2
    return result
}