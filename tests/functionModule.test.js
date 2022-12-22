const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const mockProperty = require('mock-property');
const clazz = require('../src/classModule');

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
        const stubClazz = sinon.createStubInstance(clazz.Clazz, {
            instMethod: sinon.stub().returns('TESTEI.....')
        });
        sinon.stub(clazz, 'Clazz').returns(stubClazz);
        const callFunc2Module = proxyquire('../src/functionModule', { '../src/classModule': stubClazz })
        console.log(callFunc2Module.func2Module());
    })
}) 