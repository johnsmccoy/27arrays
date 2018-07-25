[45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] 

array.forEach(element => {
    
});


let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => {
    const isString = (typeof item === 'string')
    return isString;
})

console.log(strings)




let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => {
    return typeof item === 'string';
})

console.log(strings)