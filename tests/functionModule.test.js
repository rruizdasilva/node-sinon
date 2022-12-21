const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const mockProperty = require('mock-property');


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
}) 