let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { PositionsMemoryPersistence } from 'pip-services-positions-node';
import { PositionsController } from 'pip-services-positions-node';
import { PositionsHttpServiceV1 } from 'pip-services-positions-node';
import { IPositionsClientV1 } from '../../src/version1/IPositionsClientV1';
import { PositionsHttpClientV1 } from '../../src/version1/PositionsHttpClientV1';
import { PositionsClientFixtureV1 } from './PositionsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PositionsHttpClientV1', ()=> {
    let service: PositionsHttpServiceV1;
    let client: PositionsHttpClientV1;
    let fixture: PositionsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new PositionsMemoryPersistence();
        let controller = new PositionsController();

        controller.configure(ConfigParams.fromTuples(
            'options.interval', 5 // Set interval to 5 mins
        ));

        service = new PositionsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-positions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-positions', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-positions', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new PositionsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PositionsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
