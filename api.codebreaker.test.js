const request = require("supertest");
const app = require("./api.codebreaker"); // Arrange

describe("Testing /try path", () => {
    test("It should return status code 200", done => {
        request(app)
            .get("/try/p?input=1234") // Act
            .then(response => {
                expect(response.statusCode).toBe(200); //Assert
                done();
            });
    });
    test("It should return application/json content.type", done => {
        request(app)
            .get("/try/p?input=1234") // Act
            .then(response => {
                expect(response.type).toBe("application/json");
                done();
            });
    });

    test("It should return a valid json object", done => {
        request(app)
            .get("/try/p?input=1234") // Act
            .then(response => {
                expect(response.body).not.toBeNull();
                expect(response.body.string).not.toBeUndefined();
                done();
            });
    });

    test("It should return a correct answer all X", done => {
        request(app)
            .get("/try/p?input=1234") // Act/ Act
            .then(response => {
                expect(response.body.string).toBe('XXXX');
                done();
            });
    });

    test("It should return a correct answer all empty", done => {
        request(app)
            .get("/try/p?input=5678") // Act/ Act
            .then(response => {
                expect(response.body.string).toBe('');
                done();
            });
    });

    test("It should return a correct answer all -", done => {
        request(app)
            .get("/try/p?input=4321") // Act/ Act
            .then(response => {
                expect(response.body.string).toBe('----');
                done();
            });
    });
})


describe("Testing /new-number path", () => {
    test("It should return status code 200", done => {
        request(app)
            .get("/new-number/p?digits=2") // Act
            .then(response => {
                expect(response.statusCode).toBe(200); //Assert
                done();
            });
    });

    // test("It should update to 6 digits number", done => {
    //     request(app)
    //         .get("/new-number/p?digits=6") // Act
    //         .then(response => {
    //             expect(response.body.new_number).toBe(200); //Assert
    //             done();
    //         });
    // });

   
})