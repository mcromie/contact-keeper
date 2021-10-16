const authReducer = require("./authReducer")
// @ponicode
describe("authReducer.default", () => {
    test("0", () => {
        let callFunction = () => {
            authReducer.default({}, { payload: { token: " " }, type: "REGISTER_FAIL" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authReducer.default("Alabama", { payload: { token: "not" }, type: "USER_LOADED" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authReducer.default({}, { payload: { token: "package" }, type: "USER_LOADED" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authReducer.default({}, { payload: { token: "==" }, type: "LOGIN_FAIL" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authReducer.default({}, { payload: { token: "." }, type: "LOGOUT" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            authReducer.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
