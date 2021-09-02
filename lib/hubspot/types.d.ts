declare const arrayHubspotObject: readonly [{
    readonly type: "contacts";
    readonly single: "contact";
}, {
    readonly type: "companies";
    readonly single: "company";
}, {
    readonly type: "deals";
    readonly single: "deal";
}, {
    readonly type: "tickets";
    readonly single: "ticket";
}];
declare let _allhubspotObject: ("contacts" | "companies" | "deals" | "tickets")[];
declare let _allhubspotAssocitionType: ("contact" | "company" | "deal" | "ticket")[];
declare type hubspotObject = typeof _allhubspotObject[number];
declare type hubspotAssocitionType = typeof _allhubspotAssocitionType[number];
declare type hubspotOparetor = "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "HASPROPERTY" | "NOTHASPROPERTY" | "CONTAINSTOKEN" | "NOTCONTAINSTOKEN";
export type { hubspotObject, hubspotOparetor, hubspotAssocitionType };
export { arrayHubspotObject };
//# sourceMappingURL=types.d.ts.map