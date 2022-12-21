const depModule = require('./dependencyModule');

const funcModule = () => depModule.dependencyObject;

module.exports = {
    funcModule,
}