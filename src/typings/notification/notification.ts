/**
 * Notification API
 * Definition of Notification API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotificationItem } from './notificationItem';

export class Notification {
    /**
    * Informs about the origin of the notification: - true: the notification originated from the live environment. - false: the notification originated from the test environment.
    */
    'live': string;
    /**
    * A container object for the details included in the notification.
    */
    'notificationItems': Array<NotificationItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "live",
            "baseName": "live",
            "type": "string"
        },
        {
            "name": "notificationItems",
            "baseName": "notificationItems",
            "type": "Array<NotificationItem>"
        }    ];

    static getAttributeTypeMap() {
        return Notification.attributeTypeMap;
    }
}

