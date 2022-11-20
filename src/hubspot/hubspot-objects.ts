// import hubspot from "@hubspot/api-client"
// const hubspot = require('@hubspot/api-client')
import axios from "axios";
import { hubspotObject, hubspotOparetor } from "./types";

export default class HubspotObjects {
  private hapiKey;
  private header: any;
  constructor(hapiKey = process.env.HUBSPOT_API_KEY) {
    this.hapiKey = hapiKey;
    this.header = {
      headers: {
        authorization: `Bearer ${this.hapiKey}`,
        "content-type": "application/json",
      },
    };
  }

  async create(config: any, objects: hubspotObject): Promise<any> {
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
      } else if (objects === "companies") {
        uri = `https://api.hubapi.com/crm/v3/objects/companies`;
      } else if (objects === "deals") {
        uri = `https://api.hubapi.com/crm/v3/objects/deals`;
      } else if (objects === "tickets") {
        uri = "https://api.hubapi.com/crm/v3/objects/deals";
      }
      apiResponse = await axios
        .post(uri, config, this.header)
        .then((res) => res.data);
      return apiResponse;
    } catch (e: any) {
      e.message === "HTTP request failed"
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e);
    }
  }

  async update(config: any, id: any, objects: hubspotObject): Promise<any> {
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
      } else if (objects === "companies") {
        uri = `https://api.hubapi.com/crm/v3/objects/companies`;
      } else if (objects === "deals") {
        uri = `https://api.hubapi.com/crm/v3/objects/deals`;
      } else if (objects === "tickets") {
        uri = "https://api.hubapi.com/crm/v3/objects/deals";
      }
      apiResponse = await axios
        .patch(uri, config, this.header)
        .then((res) => res.data);
      return apiResponse;
    } catch (e: any) {
      e.message === "HTTP request failed"
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e);
    }
  }

//       /**
//        *
//        * @param config
//        * @returns
//        */
//     async getByPropertyName(config : {objects:hubspotObject, propertyName: string, value: any, operator:hubspotOparetor, properties:[], limit:number}): Promise<any> {

//       let options = {
//           "filterGroups": [{ "filters": [{ propertyName: config.propertyName, "operator": config.operator as string, "value": config.value }] }],
//           "properties": config.properties,
//           "limit" : config.limit
//       }

//        // @ts-ignore
//        let apiResponse;
//        if(config.objects === "contacts"){
//            // @ts-ignore
//            apiResponse= await hubspotClient.crm.contacts.searchApi.doSearch(options).then((res:any ) => JSON.parse(JSON.stringify(res.body.results)))
//        }else if(config.objects === "companies"){
//           // @ts-ignore
//           apiResponse=  await hubspotClient.crm.companies.searchApi.doSearch(options).then((res:any ) => JSON.parse(JSON.stringify(res.body.results)))
//        }else if(config.objects === "deals"){
//            // @ts-ignore
//            apiResponse= await hubspotClient.crm.deals.searchApi.doSearch(options).then((res: any) => JSON.parse(JSON.stringify(res.body.results)))
//        }else if(config.objects === "tickets"){
//            // @ts-ignore
//            apiResponse=  await hubspotClient.crm.tickets.searchApi.doSearch(options).then((res: any) => JSON.parse(JSON.stringify(res.body.results)))
//        }
//        return apiResponse;

//   }
}
