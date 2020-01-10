"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PositionsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-positions", "controller", "*", "*", "*"));
    }
    getPositions(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'positions.get_positions');
        this._controller.getPositions(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getTimelinePositions(correlationId, orgId, time, filter, callback) {
        let timing = this.instrument(correlationId, 'positions.get_timeline_positions');
        this._controller.getTimelinePositions(correlationId, time, filter, (err, positions) => {
            timing.endTiming();
            callback(err, positions);
        });
    }
    getPositionsCount(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'positions.get_positions_count');
        this._controller.getPositionsCount(correlationId, filter, (err, count) => {
            timing.endTiming();
            callback(err, count);
        });
    }
    addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, callback) {
        let timing = this.instrument(correlationId, 'positions.add_position');
        this._controller.addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    addPositions(correlationId, orgId, positions, callback) {
        let timing = this.instrument(correlationId, 'positions.add_positions');
        this._controller.addPositions(correlationId, positions, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    deletePositions(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'positions.delete_positions');
        this._controller.deletePositions(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.PositionsDirectClientV1 = PositionsDirectClientV1;
//# sourceMappingURL=PositionsDirectClientV1.js.map