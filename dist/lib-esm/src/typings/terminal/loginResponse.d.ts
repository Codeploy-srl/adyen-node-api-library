import { POISystemData } from './pOISystemData';
import { Response } from './response';
export declare class LoginResponse {
    'pOISystemData'?: POISystemData;
    'response': Response;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}