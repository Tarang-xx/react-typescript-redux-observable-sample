const Auxiliary = require("./Auxiliary")
// @ponicode
describe("Auxiliary.default", () => {
    test("0", () => {
        let callFunction = () => {
            Auxiliary.default({ children: "Senior Brand Assistant" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Auxiliary.default({ children: "Customer Metrics Consultant" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Auxiliary.default({ children: "Product Accountability Executive" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Auxiliary.default({ children: "Principal Implementation Strategist" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Auxiliary.default({ children: "National Infrastructure Supervisor" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Auxiliary.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
