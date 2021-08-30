import { hubspotObject } from "./types";
export default class HubspotObjects {
    private hapiKey;
    constructor(hapiKey?: string | undefined);
    create(config: any, objects: hubspotObject): Promise<any>;
    update<T>(config: T, objects: hubspotObject): Promise<any>;
}
//# sourceMappingURL=hubspot-objects.d.ts.map