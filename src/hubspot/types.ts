
const arrayHubspotObject = [
{ type : "contacts", single : "contact" } , 
{type : "companies" , single : "company" }, 
{type:  "deals", single : "deal" }, 
{type: "tickets", single : "ticket"}
]as const

let _allhubspotObject = arrayHubspotObject.map(el=>el.type)
let _allhubspotAssocitionType = arrayHubspotObject.map(el=>el.single)
type hubspotObject = typeof  _allhubspotObject[number];
type hubspotAssocitionType = typeof _allhubspotAssocitionType[number]

type hubspotOparetor ="EQ"| "NEQ"| "LT"| "LTE"| "GT"| "GTE"| "HASPROPERTY"| "NOTHASPROPERTY"| "CONTAINSTOKEN"| "NOTCONTAINSTOKEN"

export type {hubspotObject, hubspotOparetor, hubspotAssocitionType}
export {arrayHubspotObject}