import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IPositionsClientV1 } from './IPositionsClientV1';
import { ObjectPositionV1 } from './ObjectPositionV1';
import { ObjectPositionsV1 } from './ObjectPositionsV1';

export class PositionsNullClientV1 implements IPositionsClientV1 {
            
    public getPositions(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectPositionsV1>) => void): void {
        callback(null, new DataPage<ObjectPositionsV1>([], 0));
    }

    public getTimelinePositions(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectPositionV1[]) => void): void {
        callback(null, []);
    }

    public getPositionsCount(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, count: number) => void): void {
        callback(null, 0);
    }

    public addPosition(correlationId: string, orgId: string, objectId: string, 
        time: Date, lat: number, lng: number, alt: number, speed: number, angle: number,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }
    
    public deletePositions(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
}