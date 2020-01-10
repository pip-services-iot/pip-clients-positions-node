"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PositionsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/positions');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getPositions(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_positions', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getTimelinePositions(correlationId, orgId, time, filter, callback) {
        this.callCommand('get_timeline_positions', correlationId, {
            time: time,
            filter: filter
        }, callback);
    }
    getPositionsCount(correlationId, orgId, filter, callback) {
        this.callCommand('get_positions_count', correlationId, {
            filter: filter
        }, (err, result) => {
            let count = result ? result.count : null;
            callback(err, count);
        });
    }
    addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, callback) {
        this.callCommand('add_position', correlationId, {
            org_id: orgId,
            object_id: objectId,
            time: time,
            lat: lat,
            lng: lng,
            alt: alt,
            speed: speed,
            angle: angle
        }, callback);
    }
    addPositions(correlationId, orgId, positions, callback) {
        this.callCommand('add_positions', correlationId, {
            positions: positions
        }, callback);
    }
    deletePositions(correlationId, orgId, filter, callback) {
        this.callCommand('delete_positions', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.PositionsHttpClientV1 = PositionsHttpClientV1;
//# sourceMappingURL=PositionsHttpClientV1.js.map