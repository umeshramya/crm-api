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
// const hubspot = require('@hubspot/api-client');
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
                // @ts-ignore
                let apiResponse;
                if (objects === "contacts") {
                    // @ts-ignore
                    apiResponse = yield hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInput).then(res => res.body);
                }
                else if (objects === "companies") {
                    // @ts-ignore
                    apiResponse = yield hubspotClient.crm.companies.basicApi.create(simplePublicObjectInput).then(res => res.body);
                }
                else if (objects === "deals") {
                    // @ts-ignore
                    apiResponse = yield hubspotClient.crm.deals.basicApi.create(simplePublicObjectInput).then(res => res.body);
                }
                else if (objects === "tickets") {
                    // @ts-ignore
                    apiResponse = yield hubspotClient.crm.tickets.basicApi.create(simplePublicObjectInput).then(res => res.body);
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
    update(config, objects) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = HubspotObjects;
//# sourceMappingURL=hubspot-objects.js.map