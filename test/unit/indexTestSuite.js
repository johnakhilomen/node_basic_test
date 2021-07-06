const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const {Sum, SumWithPromise, SumWithCallback, GetEmployee} = require("../../src/index");
const { assert } = require("chai");

describe("Index Test Suite", function(){
    context("To test the Sum function on index.js", function(){
        const varA = 25;
        const varB = 30;
        
        it("should return 55 when called to add 25 and 30", function(){
             Sum(varA, varB)
            .should.equal(55);
            // you could also have done the same using assert like this -> assert.equal(Sum(varA, varB), 55, "Assertion the sum of 25 and 30");
        })
       
        it("should throw 'Error' exception called without arguements", function(){
            expect(Sum).to.throw("Function called without arguements"); 
        })

        it("should throw 'Error' exception called with one arguement", function(){
            expect(()=>Sum(varA)).to.throw("Function was called with one arguement"); 
        })

        it("should throw 'TypeError' exception called with string arguement", function(){
            expect(()=>Sum("varA", "varB")).to.throw("Function must be called with two integers"); 
        })

        it("should pass the Sum function that returns a promise object is called with parameters", function(){
            SumWithPromise(varA, varB)
            .then(actual => actual.should.deep.equal(55));
        })

        it("should fail when the Sum function that returns a promise object is called without parameters", function(){
            const errMsg = "Function called without parameters";
            SumWithPromise()
            .catch(error => error.should.deep.equal(errMsg));
        })

        it("should pass with '9' when the Sum function that returns callback is called with parameters 4 and 5", function(){
            SumWithCallback(4, 5, (result)=>{
                result.should.equal(9);
            })
        })

        it("should fail when the Sum function that returns callback is called without parameters", function(){
            const errMsg = "Function called without parameters";
            SumWithCallback((error)=>{
                error.should.be.an("error");
                done();
            })
        })

        it("should pass with finding properties fullname and address", function(){
            const employee  = GetEmployee();
            employee.should.have.property("fullname");
            employee.should.have.property("address")
        })
    })
})