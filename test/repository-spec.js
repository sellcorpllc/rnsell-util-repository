/*jslint vars: true, devel: true, nomen: true, node: true, indent: 4, maxerr: 50 */
/*global describe, it*/
var assert = require("assert");



// function ContructorTest() {
//     var Repository = require("../index.js").repository,
//         repo = new Repository();

//     // assert.equal(true, repo.hasOwnProperty("hasOwnProperty"));
//     // assert.equal(true, repo.hasOwnProperty("read"));
//     // assert.equal(true, repo.hasOwnProperty("create"));
//     // assert.equal(true, repo.hasOwnProperty("update"));
//     // assert.equal(true, repo.hasOwnProperty("delete"));
//     // assert.equal(true, repo.hasOwnProperty("customEvent"));
// }

function ReadRepoTest(done) {
    var Repository = require("../index.js").repository,
        repo = new Repository();


    repo.once("read", function () {
        done();
    });
    repo.read("");
}

function CreateRepoTest(done) {
    var Repository = require("../index.js").repository,
        repo = new Repository();

    repo.once("create", function () {
        done();
    });
    repo.create("");
}

function UpdateRepoTest(done) {
    var Repository = require("../index.js").repository,
        repo = new Repository();

    repo.once("update", function () {
        done();
    });
    repo.update("");
}

function DestroyRepoTest(done) {
    var Repository = require("../index.js").repository,
        repo = new Repository();

    repo.once("destroy", function () {
        done();
    });
    repo.destroy("");
}

function CustomEventTest(done) {
    var Repository = require("../index.js").repository,
        repo = new Repository(),
        customEvent = "storedProcedure";
    repo.once(customEvent, function () {
        done();
    });
    repo.customEvent(customEvent, "");
}

describe("Repository", function () {
    describe("read()", function () {
        it("Should emit the read event", ReadRepoTest);
    });
});

describe("Repository", function () {
    describe("create()", function () {
        it("Should emit the create event", CreateRepoTest);
    });
});

describe("Repository", function () {
    describe("update()", function () {
        it("Should emit the update event", UpdateRepoTest);
    });
});

describe("Repository", function () {
    describe("destroy()", function () {
        it("Should emit the destory event", DestroyRepoTest);
    });
});

describe("Repository", function () {
    describe("customEvent()", function () {
        it("Should emit the destory event", CustomEventTest);
    });
});