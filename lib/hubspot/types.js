"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayHubspotObject = void 0;
const arrayHubspotObject = [
    { type: "contacts", single: "contact" },
    { type: "companies", single: "company" },
    { type: "deals", single: "deal" },
    { type: "tickets", single: "ticket" }
];
exports.arrayHubspotObject = arrayHubspotObject;
let _allhubspotObject = arrayHubspotObject.map(el => el.type);
let _allhubspotAssocitionType = arrayHubspotObject.map(el => el.single);
//# sourceMappingURL=types.js.map