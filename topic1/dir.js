function createUser(name, age) {
    logger(`hello i am ${name}, and I have ${age} yaers old`)
}

function logger(string) {
    console.log(string);
}

module.exports = {
    createUser
}
