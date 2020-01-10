import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { PositionsNullClientV1 } from '../version1/PositionsNullClientV1';
import { PositionsDirectClientV1 } from '../version1/PositionsDirectClientV1';
import { PositionsHttpClientV1 } from '../version1/PositionsHttpClientV1';
import { PositionsLambdaClientV1 } from '../version1/PositionsLambdaClientV1';
import { PositionsHttpProxyClientV1 } from '../version1/PositionsHttpProxyClientV1';

export class PositionsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-positions', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-positions', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-positions', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-positions', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-positions', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('pip-services-positions', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(PositionsClientFactory.NullClientV1Descriptor, PositionsNullClientV1);
		this.registerAsType(PositionsClientFactory.DirectClientV1Descriptor, PositionsDirectClientV1);
		this.registerAsType(PositionsClientFactory.HttpClientV1Descriptor, PositionsHttpClientV1);
		this.registerAsType(PositionsClientFactory.LambdaClientV1Descriptor, PositionsLambdaClientV1);
		this.registerAsType(PositionsClientFactory.HttpProxyClientV1Descriptor, PositionsHttpProxyClientV1);
	}
	
}
