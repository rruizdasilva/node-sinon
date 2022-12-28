const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const clazzMod = require('../src/classModule');

describe.only('Testando...', () => {

    afterEach(() => {
        sinon.restore()
    });

    it('Proxyquire', () => {
        depObjStub = {};
        const callFuncModule = proxyquire('../src/functionModule', { '../src/dependencyModule': depObjStub })
        depObjStub.dependencyObject = { a: 'testando' };
        console.log(callFuncModule.funcModule());
    })

    it('Sinon + Proxyquire', () => {
        depObjStub = sinon.stub();
        const callFuncModule = proxyquire('../src/functionModule', { '../src/dependencyModule': depObjStub })
        depObjStub.dependencyObject = { a: 'testando' };
        console.log(callFuncModule.funcModule());
    })

    it('Sinon', () => {
        const depMod = require('../src/dependencyModule')
        depObjStub = sinon.stub(depMod, 'dependencyObject');
        const func = proxyquire('../src/functionModule', { depMod })
        depObjStub.returns(3);
        // console.log(func.funcModule())
    })

    it('Sinon + Proxyquire + Class', () => {
        const stubClazzObj = sinon.createStubInstance(clazzMod.Clazz, {
            instMethod: sinon.stub().returns('instMethod Mockado')
        });
        sinon.stub(clazzMod, 'Clazz').returns(stubClazzObj);
        const callFunc2Module = proxyquire('../src/functionModule', { clazzMod: stubClazzObj })
        console.log(callFunc2Module.func2Module());
    })

    it('Sinon + Proxyquire + Class + getter', () => {
        const stubClazzObj = sinon.createStubInstance(clazzMod.Clazz, {
            instMethod: sinon.stub().returns('instMethod Mockado'),
        });
        sinon.stub(stubClazzObj, 'message').get(function getterFn() {
            return 'TESTAREI MAIS NÃO';
        });
        sinon.stub(clazzMod, 'Clazz').returns(stubClazzObj);
        const callFunc3Module = proxyquire('../src/functionModule', { clazzMod: stubClazzObj })
        console.log(callFunc3Module.func3Module())
    })
});