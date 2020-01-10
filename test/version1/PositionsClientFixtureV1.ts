let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ObjectPositionsV1 } from '../../src/version1/ObjectPositionsV1';
import { IPositionsClientV1 } from '../../src/version1/IPositionsClientV1';

let now = new Date().getTime();
let interval = 300000;
let point1 = new Date(now);
let point2 = new Date(now + (interval / 2));
let point3 = new Date(now + interval);

export class PositionsClientFixtureV1 {
    private _client: IPositionsClientV1;
    
    constructor(client: IPositionsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let position1: ObjectPositionsV1;

        async.series([
        // Create one position
            (callback) => {
                this._client.addPosition(
                    null,
                    '1', '1', point1, 1, 1, null, null, null,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Create other positions
            (callback) => {
                this._client.addPositions(
                    null, 
                    '1',
                    [
                        { org_id: '1', object_id: '1', time: point2, lat: 2, lng: 2, alt: null, angle: null, speed: null },
                        { org_id: '1', object_id: '1', time: point3, lat: 3, lng: 3, alt: null, angle: null, speed: null }
                    ],
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Get timeline positions
            (callback) => {
                this._client.getTimelinePositions(
                    null,
                    '1',
                    point2,
                    null,
                    (err, positions) => {
                        assert.isNull(err);

                        assert.isArray(positions);
                        assert.lengthOf(positions, 1);

                        let position = positions[0];
                        assert.equal(position.org_id, '1');
                        assert.equal(position.object_id, '1');

                        callback();
                    }
                );
            },
        // Get positions count
            (callback) => {
                this._client.getPositionsCount(
                    null,
                    '1',
                    null,
                    (err, count) => {
                        assert.isNull(err);

                        assert.equal(count, 3);

                        callback();
                    }
                );
            },
        // Delete position
            (callback) => {
                this._client.deletePositions(
                    null,
                    '1',
                    null,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete positions
            (callback) => {
                this._client.getPositions(
                    null,
                    '1',
                    null,
                    null,
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 0);

                        callback();
                    }
                );
            }
        ], done);
    }
}
