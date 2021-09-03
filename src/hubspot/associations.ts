// import hubspot from "@hubspot/api-client"
const hubspot = require('@hubspot/api-client')
import { hubspotObject, arrayHubspotObject, hubspotAssocitionType } from "./types";

export default class Associations{
    private hapiKey
    constructor(hapiKey = process.env.HUBSPOT_API_KEY){
        this.hapiKey = hapiKey;
    }

    async create(config : {
        fromObjectType : hubspotObject;
        toObjectType : hubspotObject;
        fromObjectId: any;
        toObjectId : any
    }):Promise<any>{

            const curAssocitionType = `${arrayHubspotObject.filter(el=> el.type === config.fromObjectType)[0].single}_to_${arrayHubspotObject.filter(el=> el.type === config.toObjectType)[0].single}`
   
            const hubspotClient = new hubspot.Client({"apiKey":this.hapiKey});

            const batchInputPublicAssociation = { inputs: [{"from":{"id": config.fromObjectId},"to":{"id": config.toObjectId},"type":curAssocitionType}] };
            const fromObjectType = config.fromObjectType;
            const toObjectType = config.toObjectType;
                try {
                const apiResponse = await hubspotClient.crm.associations.batchApi.create(fromObjectType, toObjectType, batchInputPublicAssociation);
                
                } catch (e:any) {
                e.message === 'HTTP request failed'
                    ? console.error(JSON.stringify(e.response, null, 2))
                    : console.error(e)
                }
            

    }
}