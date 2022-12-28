const depModule = require('./dependencyModule');
const { Clazz } = require('./classModule');
const clazzObj = new Clazz('TEST TEST TEST');

const funcModule = () => depModule.dependencyObject;

const func2Module = () => {
    return clazzObj.instMethod();
}

const func3Module = () => {
    return clazzObj.message;
}

module.exports = {
    funcModule,
    func2Module,
    func3Module
}