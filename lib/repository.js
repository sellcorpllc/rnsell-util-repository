/*jslint vars: true, devel: true, nomen: true, node: true, indent: 4, maxerr: 50 */
(function (mod) {

    var EventEmitter = require('events').EventEmitter;

    function Repository() {
        EventEmitter.call(this);
    }

    //Inherit
    require('util').inherits(Repository, EventEmitter);

    //Non standard CRUD events can use this hook for emitting.        
    Repository.prototype.customEvent = function (event, eventData, callback) {
        if (arguments.length > 2) {
            if (typeof callback === "function") {
                this.on(event, callback(eventData));
            }
        }
        this.emit(event, eventData);
    };

    Repository.prototype.read = function (eventData, callback) {
        this.customEvent("read", eventData, callback);
    };
    Repository.prototype.create = function (eventData, callback) {
        this.customEvent("create", eventData, callback);
    };

    Repository.prototype.update = function (eventData, callback) {
        this.customEvent("update", eventData, callback);
    };

    Repository.prototype.destroy = function (eventData, callback) {
        this.customEvent("destroy", eventData, callback);
    };

    Repository.prototype.list = function (eventData, callback) {
        this.customEvent("list", eventData, callback);
    };

    Repository.prototype.customEventOnce = function (event, eventData, callback) {
        if (arguments.length > 2) {
            // console.log(eventData.guid);
            if (typeof callback === "function") {
                this.once(eventData.guid, callback);
            }
        }
        this.emit(event, eventData);
    };

    Repository.prototype.readOnce = function (eventData, callback) {
        this.customEventOnce("read", eventData, callback);
    };

    Repository.prototype.createOnce = function (eventData, callback) {
        this.customEventOnce("create", eventData, callback);
    };

    Repository.prototype.updateOnce = function (eventData, callback) {
        this.customEventOnce("update", eventData, callback);
    };

    Repository.prototype.destroyOnce = function (eventData, callback) {
        this.customEventOnce("destroy", eventData, callback);
    };

    Repository.prototype.listOnce = function (eventData, callback) {
        this.customEventOnce("list", eventData, callback);
    };


    mod.Repository = Repository;

}(module.exports));