import { hubspotObject, hubspotOparetor } from "./types";
export default class HubspotObjects {
    private hapiKey;
    private header;
    constructor(hapiKey?: string | undefined);
    create(config: any, objects: hubspotObject): Promise<any>;
    update(config: any, id: any, objects: hubspotObject): Promise<any>;
    /**
     *
     * @param config
     * @returns
     */
    getByPropertyName(config: {
        objects: hubspotObject;
        propertyName: string;
        value: any;
        operator: hubspotOparetor;
        properties: [];
        limit: number;
    }): Promise<any>;
}
//# sourceMappingURL=hubspot-objects.d.ts.map