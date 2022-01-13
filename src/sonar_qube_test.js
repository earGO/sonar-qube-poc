
export function sonarTest(string1, string2){
    if(string1==string2){
        return "equal strings"
    } else {
        return 'not equal'
    }
}

export function sonarTestToo(stringRoot, stringToAdd){
    return stringRoot=+stringToAdd
}

export function sonarTestThree(stringRoot, stringToAdd){
    const result = undefined;
    if(stringRoot && stringToAdd && stringToAdd!=2){
        result =+stringRoot
        result =+stringToAdd
    }
    return result
}