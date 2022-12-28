const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const clazzMod = require('../src/classModule');

describe.only('Testando...', () => {
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
        const stubClazz = sinon.createStubInstance(clazzMod.Clazz, {
            instMethod: sinon.stub().returns('TESTEI.....')
        });
        sinon.stub(clazzMod, 'Clazz').returns(stubClazz);
        const callFunc2Module = proxyquire('../src/functionModule', { clazz: stubClazz })
        console.log(callFunc2Module.func2Module());
    })

    it.only('Sinon + Proxyquire + Class + getter', () => {

        const clazzObj = new clazzMod.Clazz('TESTAREIS');
        console.log(clazzObj.message)

        sinon.stub(clazzObj, 'message').get(function getterFn() {
            return 'TESTAREI MAIS NÃO';
        });

        console.log(clazzObj.message)
    })
});