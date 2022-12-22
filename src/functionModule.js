const depModule = require('./dependencyModule');
const { Clazz } = require('./classModule');

const funcModule = () => depModule.dependencyObject;
const func2Module = () => {
    const clazz = new Clazz();
    return clazz.instMethod();
}

module.exports = {
    funcModule,
    func2Module,
}