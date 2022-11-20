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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import hubspot from "@hubspot/api-client"
const hubspot = require('@hubspot/api-client');
const axios_1 = __importDefault(require("axios"));
class HubspotObjects {
    constructor(hapiKey = process.env.HUBSPOT_API_KEY) {
        this.hapiKey = hapiKey;
        this.header = {
            headers: {
                authorization: `Bearer ${this.hapiKey}`,
                "content-type": "application/json",
            },
        };
    }
    create(config, objects) {
        return __awaiter(this, void 0, void 0, function* () {
            const properties = {};
            Object.keys(config).map((key) => {
                //@ts-ignore
                properties[key] = config[`${key}`];
            });
            const simplePublicObjectInput = { properties };
            try {
                let apiResponse;
                let uri = "";
                if (objects === "contacts") {
                    uri = `https://api.hubapi.com/crm/v3/objects/contacts`;
                }
                else if (objects === "companies") {
                    uri = `https://api.hubapi.com/crm/v3/objects/companies`;
                }
                else if (objects === "deals") {
                    uri = `https://api.hubapi.com/crm/v3/objects/deals`;
                }
                else if (objects === "tickets") {
                    uri = "https://api.hubapi.com/crm/v3/objects/deals";
                }
                apiResponse = yield axios_1.default
                    .post(uri, config, this.header)
                    .then((res) => res.data);
                return apiResponse;
            }
            catch (e) {
                e.message === "HTTP request failed"
                    ? console.error(JSON.stringify(e.response, null, 2))
                    : console.error(e);
            }
        });
    }
    update(config, id, objects) {
        return __awaiter(this, void 0, void 0, function* () {
            const properties = {};
            Object.keys(config).map((key) => {
                //@ts-ignore
                properties[key] = config[`${key}`];
            });
            const simplePublicObjectInput = { properties };
            try {
                let uri = "";
                let apiResponse;
                if (objects === "contacts") {
                    uri = `https://api.hubapi.com/crm/v3/objects/contacts`;
                }
                else if (objects === "companies") {
                    uri = `https://api.hubapi.com/crm/v3/objects/companies`;
                }
                else if (objects === "deals") {
                    uri = `https://api.hubapi.com/crm/v3/objects/deals`;
                }
                else if (objects === "tickets") {
                    uri = "https://api.hubapi.com/crm/v3/objects/deals";
                }
                apiResponse = yield axios_1.default
                    .patch(uri, config, this.header)
                    .then((res) => res.data);
                return apiResponse;
            }
            catch (e) {
                e.message === "HTTP request failed"
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
            const hubspotClient = new hubspot.Client({ accessToken: this.hapiKey });
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