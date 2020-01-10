"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const PositionsNullClientV1_1 = require("../version1/PositionsNullClientV1");
const PositionsDirectClientV1_1 = require("../version1/PositionsDirectClientV1");
const PositionsHttpClientV1_1 = require("../version1/PositionsHttpClientV1");
const PositionsLambdaClientV1_1 = require("../version1/PositionsLambdaClientV1");
const PositionsHttpProxyClientV1_1 = require("../version1/PositionsHttpProxyClientV1");
class PositionsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(PositionsClientFactory.NullClientV1Descriptor, PositionsNullClientV1_1.PositionsNullClientV1);
        this.registerAsType(PositionsClientFactory.DirectClientV1Descriptor, PositionsDirectClientV1_1.PositionsDirectClientV1);
        this.registerAsType(PositionsClientFactory.HttpClientV1Descriptor, PositionsHttpClientV1_1.PositionsHttpClientV1);
        this.registerAsType(PositionsClientFactory.LambdaClientV1Descriptor, PositionsLambdaClientV1_1.PositionsLambdaClientV1);
        this.registerAsType(PositionsClientFactory.HttpProxyClientV1Descriptor, PositionsHttpProxyClientV1_1.PositionsHttpProxyClientV1);
    }
}
exports.PositionsClientFactory = PositionsClientFactory;
PositionsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-positions', 'factory', 'default', 'default', '1.0');
PositionsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-positions', 'client', 'null', 'default', '1.0');
PositionsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-positions', 'client', 'direct', 'default', '1.0');
PositionsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-positions', 'client', 'http', 'default', '1.0');
PositionsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-positions', 'client', 'lambda', 'default', '1.0');
PositionsClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-positions', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=PositionsClientFactory.js.map