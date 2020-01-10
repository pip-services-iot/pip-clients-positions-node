"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class PositionsNullClientV1 {
    getPositions(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getTimelinePositions(correlationId, orgId, time, filter, callback) {
        callback(null, []);
    }
    getPositionsCount(correlationId, orgId, filter, callback) {
        callback(null, 0);
    }
    addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, callback) {
        if (callback)
            callback(null);
    }
    addPositions(correlationId, orgId, positions, callback) {
        if (callback)
            callback(null);
    }
    deletePositions(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
}
exports.PositionsNullClientV1 = PositionsNullClientV1;
//# sourceMappingURL=PositionsNullClientV1.js.map