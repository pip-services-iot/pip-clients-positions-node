import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { ObjectPositionV1 } from './ObjectPositionV1';
import { ObjectPositionsV1 } from './ObjectPositionsV1';
import { IPositionsClientV1 } from './IPositionsClientV1';

export class PositionsHttpClientV1 extends CommandableHttpClient implements IPositionsClientV1 {       
    
    constructor(config?: any) {
        super('v1/positions');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getPositions(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectPositionsV1>) => void): void {
        this.callCommand( 
            'get_positions', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getTimelinePositions(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectPositionV1[]) => void): void {
        this.callCommand( 
            'get_timeline_positions', 
            correlationId,
            {
                time: time,
                filter: filter
            }, 
            callback
        );
    }
    
    public getPositionsCount(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any, count: number) => void): void {
        this.callCommand( 
            'get_positions_count', 
            correlationId,
            {
                filter: filter
            }, 
            (err, result) => {
                let count = result ? result.count : null;
                callback(err, count);
            }
        );
    }

    public addPosition(correlationId: string, orgId: string, objectId: string, 
        time: Date, lat: number, lng: number, alt: number, speed: number, angle: number,
        callback: (err: any) => void): void {
        this.callCommand(
            'add_position',
            correlationId,
            {
                org_id: orgId,
                object_id: objectId,
                time: time,
                lat: lat,
                lng: lng,
                alt: alt,
                speed: speed,
                angle: angle
            }, 
            callback
        );
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        this.callCommand(
            'add_positions',
            correlationId,
            {
                positions: positions
            }, 
            callback
        );
    }
    
    public deletePositions(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, position: ObjectPositionsV1) => void): void {
        this.callCommand(
            'delete_positions', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }
}
