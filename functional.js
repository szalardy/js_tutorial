let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}



// ****** .map ******

// urls: Imperative version
function imperativeUrls (elements) {
    let urls = [];
    elements.forEach(function(element){
        urls.push(urlify(element));
    });
    return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    // longest version
    // return elements.map( function(element) {return urlify(element)});
    
    // Fat Arrow version
    // return elements.map( (element) => {return urlify(element)});
    
    // Shortest version ('map' allows elimination of brackets, curly braces and 'return')
    return elements.map( element => urlify(element));
}

console.log(functionalUrls(states));



// ****** .filter ******

// singles: Imperativve version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter( element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// ****** .reduce ******

// sum: Imperative version
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(element) {
        total += element;
    });
    return total;
}

console.log(imperativeSum(numbers));

// sum: Functional version
function functionalSum(elements) {
    // return elements.reduce((total, element) => { return total += element; }, 0); 
    // the last argument '0' is the initial value of 'total', which is '0' by default, so it can be ommitted:
    return elements.reduce((total, element) => { return total += element; }); 
}

console.log(functionalSum(numbers));


// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(states));

// lengths: Functional version
function functionalLengths(elements) {
    // return elements.reduce((lengths, element) => {
    //     lengths[element] = element.length;
    //     return lengths;
    // }, {} );
    return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {} );
}

console.log(functionalLengths(states));