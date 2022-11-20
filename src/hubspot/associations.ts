// import hubspot from "@hubspot/api-client"
const hubspot = require("@hubspot/api-client");
import axios from "axios";
import {
  hubspotObject,
  arrayHubspotObject,
  hubspotAssocitionType,
} from "./types";

export default class Associations {
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

  async create(config: {
    fromObjectType: hubspotObject;
    toObjectType: hubspotObject;
    fromObjectId: any;
    toObjectId: any;
  }): Promise<any> {

    const fromSingleObject =      arrayHubspotObject.filter((el) => el.type === config.fromObjectType)[0]
    .single
    const toSingleObject =arrayHubspotObject.filter((el) => el.type === config.toObjectType)[0]
    .single

    const data = {
      "inputs": [
        {
          "from": {
            "id": config.fromObjectId
          },
          "to": {
            "id": config.toObjectId
          },
          "type": `${fromSingleObject}_to_${toSingleObject}`
        }
      ]
    }
    const uri= `https://api.hubapi.com/crm/v3/associations/${config.fromObjectType}/${config.toObjectType}/batch/create`
    try {
      const apiResponse = await axios.post(uri, data,this.header ).then(res=>res.data)
      return apiResponse
    } catch (e: any) {
      e.message === "HTTP request failed"
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e);
    }
  }
}

