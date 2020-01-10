let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { PositionsMemoryPersistence } from 'pip-services-positions-node';
import { PositionsController } from 'pip-services-positions-node';
import { IPositionsClientV1 } from '../../src/version1/IPositionsClientV1';
import { PositionsDirectClientV1 } from '../../src/version1/PositionsDirectClientV1';
import { PositionsClientFixtureV1 } from './PositionsClientFixtureV1';

suite('PositionsDirectClientV1', ()=> {
    let client: PositionsDirectClientV1;
    let fixture: PositionsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new PositionsMemoryPersistence();
        let controller = new PositionsController();

        controller.configure(ConfigParams.fromTuples(
            'options.interval', 5 // Set interval to 5 mins
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-positions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-positions', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new PositionsDirectClientV1();
        client.setReferences(references);

        fixture = new PositionsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
