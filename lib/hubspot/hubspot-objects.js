"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import hubspot from "@hubspot/api-client"
const hubspot = require('@hubspot/api-client');
class HubspotObjects {
    constructor(hapiKey = process.env.HUBSPOT_API_KEY) {
        this.hapiKey = hapiKey;
    }
    create(config, objects) {
        return __awaiter(this, void 0, void 0, function* () {
            const hubspotClient = new hubspot.Client({ "apiKey": this.hapiKey });
            const properties = {};
            Object.keys(config).map((key) => {
                //@ts-ignore
                properties[key] = config[`${key}`];
            });
            const simplePublicObjectInput = { properties };
            try {
                let apiResponse;
                if (objects === "contacts") {
                    apiResponse = yield hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInput).then((res) => res.body);
                }
                else if (objects === "companies") {
                    apiResponse = yield hubspotClient.crm.companies.basicApi.create(simplePublicObjectInput).then((res) => res.body);
                }
                else if (objects === "deals") {
                    apiResponse = yield hubspotClient.crm.deals.basicApi.create(simplePublicObjectInput).then((res) => res.body);
                }
                else if (objects === "tickets") {
                    apiResponse = yield hubspotClient.crm.tickets.basicApi.create(simplePublicObjectInput).then((res) => res.body);
                }
                return apiResponse;
            }
            catch (e) {
                e.message === 'HTTP request failed'
                    ? console.error(JSON.stringify(e.response, null, 2))
                    : console.error(e);
            }
        });
    }
    update(config, id, objects) {
        return __awaiter(this, void 0, void 0, function* () {
            const hubspotClient = new hubspot.Client({ "apiKey": this.hapiKey });
            const properties = {};
            Object.keys(config).map((key) => {
                //@ts-ignore
                properties[key] = config[`${key}`];
            });
            const simplePublicObjectInput = { properties };
            try {
                let apiResponse;
                if (objects === "contacts") {
                    apiResponse = yield hubspotClient.crm.contacts.basicApi.update(id, simplePublicObjectInput).then((res) => res.body);
                }
                else if (objects === "companies") {
                    apiResponse = yield hubspotClient.crm.companies.basicApi.update(id, simplePublicObjectInput).then((res) => res.body);
                }
                else if (objects === "deals") {
                    apiResponse = yield hubspotClient.crm.deals.basicApi.update(id, simplePublicObjectInput).then((res) => res.body);
                }
                else if (objects === "tickets") {
                    apiResponse = yield hubspotClient.crm.tickets.basicApi.update(id, simplePublicObjectInput).then((res) => res.body);
                }
                return apiResponse;
            }
            catch (e) {
                e.message === 'HTTP request failed'
                    ? console.error(JSON.stringify(e.response, null, 2))
                    : console.error(e);
            }
        });
    }
    /**
     *
     * @param config
     * @returns
     */
    getByPropertyName(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const hubspotClient = new hubspot.Client({ "apiKey": this.hapiKey });
            let options = {
                "filterGroups": [{ "filters": [{ propertyName: config.propertyName, "operator": config.operator, "value": config.value }] }],
                "properties": config.properties,
                "limit": config.limit
            };
            // @ts-ignore
            let apiResponse;
            if (config.objects === "contacts") {
                // @ts-ignore
                apiResponse = yield hubspotClient.crm.contacts.searchApi.doSearch(options).then((res) => JSON.parse(JSON.stringify(res.body.results)));
            }
            else if (config.objects === "companies") {
                // @ts-ignore
                apiResponse = yield hubspotClient.crm.companies.searchApi.doSearch(options).then((res) => JSON.parse(JSON.stringify(res.body.results)));
            }
            else if (config.objects === "deals") {
                // @ts-ignore
                apiResponse = yield hubspotClient.crm.deals.searchApi.doSearch(options).then((res) => JSON.parse(JSON.stringify(res.body.results)));
            }
            else if (config.objects === "tickets") {
                // @ts-ignore
                apiResponse = yield hubspotClient.crm.tickets.searchApi.doSearch(options).then((res) => JSON.parse(JSON.stringify(res.body.results)));
            }
            return apiResponse;
        });
    }
}
exports.default = HubspotObjects;
//# sourceMappingURL=hubspot-objects.js.map