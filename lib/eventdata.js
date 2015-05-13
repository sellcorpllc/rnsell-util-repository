/*jslint vars: true, devel: true, nomen: true, node: true, indent: 4, maxerr: 50 */
(function (mod) {
    function EventData() {
        var uuid = require("node-uuid");
        this.guid = uuid.v4();
        this.timestamp = new Date().getTime();
    }
    mod.EventData = EventData;
}(module.exports));