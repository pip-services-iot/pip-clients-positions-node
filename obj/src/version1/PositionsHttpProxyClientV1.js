"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const PositionsHttpClientV1_1 = require("./PositionsHttpClientV1");
class PositionsHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(PositionsHttpClientV1_1.PositionsHttpClientV1, 'pip-services-positions', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getPositions(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getPositions(correlationId, orgId, filter, paging, callback);
        });
    }
    getTimelinePositions(correlationId, orgId, time, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getTimelinePositions(correlationId, orgId, time, filter, callback);
        });
    }
    getPositionsCount(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getPositionsCount(correlationId, orgId, filter, callback);
        });
    }
    addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, callback);
        });
    }
    addPositions(correlationId, orgId, positions, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addPositions(correlationId, orgId, positions, callback);
        });
    }
    deletePositions(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.deletePositions(correlationId, orgId, filter, callback);
        });
    }
}
exports.PositionsHttpProxyClientV1 = PositionsHttpProxyClientV1;
//# sourceMappingURL=PositionsHttpProxyClientV1.js.map