import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IPositionsClientV1 } from './IPositionsClientV1';
//import { IPositionsController } from 'pip-services-positions-node';
import { ObjectPositionV1 } from './ObjectPositionV1';
import { ObjectPositionsV1 } from './ObjectPositionsV1';

export class PositionsDirectClientV1 extends DirectClient<any> implements IPositionsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-positions", "controller", "*", "*", "*"))
    }

    public getPositions(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectPositionsV1>) => void): void {
        let timing = this.instrument(correlationId, 'positions.get_positions');
        this._controller.getPositions(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getTimelinePositions(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectPositionV1[]) => void): void {
        let timing = this.instrument(correlationId, 'positions.get_timeline_positions');
        this._controller.getTimelinePositions(correlationId, time, filter, (err, positions) => {
            timing.endTiming();
            callback(err, positions);
        });
    }
    
    public getPositionsCount(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, count: number) => void): void {
        let timing = this.instrument(correlationId, 'positions.get_positions_count');
        this._controller.getPositionsCount(correlationId, filter, (err, count) => {
            timing.endTiming();
            callback(err, count);
        });
    }

    public addPosition(correlationId: string, orgId: string, objectId: string, 
        time: Date, lat: number, lng: number, alt: number, speed: number, angle: number,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'positions.add_position');
        this._controller.addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'positions.add_positions');
        this._controller.addPositions(correlationId, positions, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
    public deletePositions(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'positions.delete_positions');
        this._controller.deletePositions(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}