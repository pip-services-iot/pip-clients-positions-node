import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { ObjectPositionV1 } from './ObjectPositionV1';
import { ObjectPositionsV1 } from './ObjectPositionsV1';
import { IPositionsClientV1 } from './IPositionsClientV1';
import { PositionsHttpClientV1 } from './PositionsHttpClientV1';

export class PositionsHttpProxyClientV1 extends ClustersProxyHttpClientV1<IPositionsClientV1>
    implements IPositionsClientV1 {       
    
    constructor(config?: any) {
        super(PositionsHttpClientV1, 'pip-services-positions', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getPositions(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectPositionsV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getPositions(correlationId, orgId, filter, paging, callback);
        });
    }

    public getTimelinePositions(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectPositionV1[]) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getTimelinePositions(correlationId, orgId, time, filter, callback);
        });
    }
        
    public getPositionsCount(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any, count: number) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getPositionsCount(correlationId, orgId, filter, callback);
        });
    }
    
    public addPosition(correlationId: string, orgId: string, objectId: string, 
        time: Date, lat: number, lng: number, alt: number, speed: number, angle: number,
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addPosition(correlationId, orgId, objectId, time, lat, lng, alt, speed, angle, callback);
        });
    }
    
    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addPositions(correlationId, orgId, positions, callback);
        });
    }
        
    public deletePositions(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.deletePositions(correlationId, orgId, filter, callback);
        });
    }
}
