const depModule = require('./dependencyModule');
const { Clazz } = require('./classModule');

const funcModule = () => depModule.dependencyObject;

const func2Module = () => {
    const clazzObj = new Clazz('TEST TEST TEST');
    return clazzObj.instMethod();
}

const func3Module = () => {
    const clazzObj = new Clazz('TEST TEST TEST'); 
    return clazzObj.message;
}

module.exports = {
    funcModule,
    func2Module,
    func3Module
}