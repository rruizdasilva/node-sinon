class Clazz {

    #message

    constructor(message) {
        this.#message = message;
    }

    instMethod() {
        return 'instMethod'
    }

    get message() {
        return this.#message;
    }
}

module.exports = {
    Clazz
}