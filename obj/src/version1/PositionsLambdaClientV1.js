"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class PositionsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('positions');
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
exports.PositionsLambdaClientV1 = PositionsLambdaClientV1;
//# sourceMappingURL=PositionsLambdaClientV1.js.map