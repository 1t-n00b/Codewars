function countLanguages(list) {

    let languages = {}
    for (let i = 0; i < list.length; i++) {
        let type = list[i].language
        if (!languages.hasOwnProperty(type)) {
            languages[type] = 1
        } else {
            languages[list[i].language]++
        }


    }

    return languages


}

var list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
    {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
];

//var answer = { C: 2, JavaScript: 1, Ruby: 1 };
console.log(countLanguages(list1))
