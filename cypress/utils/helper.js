export const isSuperset = (set, subSet) => {
    for (let elem of subSet){
        if (!set.has(elem)){
            return false
        }
    }
    return true
};

export const intersection = (setA, setB) =>{
    let _intersection = new Set();
    for (let elem in setB){
        if (setA.has(elem)){
            _intersection.add(elem);
        }
    }
    return _intersection
};