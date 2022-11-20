// import hubspot from "@hubspot/api-client"
const hubspot = require('@hubspot/api-client')
import { hubspotObject, hubspotOparetor } from "./types";

export default class HubspotObjects{
    private hapiKey
    constructor(hapiKey = process.env.HUBSPOT_API_KEY){
        this.hapiKey = hapiKey;
    }

    async create(config:any  , objects: hubspotObject):Promise<any>{
        
        const hubspotClient = new hubspot.Client({ accessToken:this.hapiKey});

        const properties = {}
        Object.keys(config).map((key)=>{
            //@ts-ignore
            properties[key] = config[`${key}`]
        })

      
        const simplePublicObjectInput = { properties };
        try {
        
            let apiResponse;
            if(objects === "contacts"){
             
                apiResponse = await hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInput).then((res:any) => res.body);
            }else if(objects === "companies"){
                
                apiResponse = await hubspotClient.crm.companies.basicApi.create(simplePublicObjectInput).then((res:any) => res.body);
            }else if(objects === "deals"){
            
                apiResponse = await hubspotClient.crm.deals.basicApi.create(simplePublicObjectInput).then((res:any) => res.body);
            }else if(objects === "tickets"){
            
                apiResponse = await hubspotClient.crm.tickets.basicApi.create(simplePublicObjectInput).then((res:any) => res.body);
            }
            console.log(apiResponse)
            return apiResponse;
        } catch (e:any) {
            e.message === 'HTTP request failed'
                ? console.error(JSON.stringify(e.response, null, 2))
                : console.error(e)
        }
    }

    async update (config:any, id:any ,objects:hubspotObject):Promise<any>{
        const hubspotClient = new hubspot.Client({ accessToken:this.hapiKey});

        const properties = {}
        Object.keys(config).map((key)=>{
            //@ts-ignore
            properties[key] = config[`${key}`]
        })

      
        const simplePublicObjectInput = { properties };
        try {
            
            let apiResponse;
            if(objects === "contacts"){
                
                apiResponse = await hubspotClient.crm.contacts.basicApi.update(id,simplePublicObjectInput).then((res:any) => res.body);
            }else if(objects === "companies"){
                
                apiResponse = await hubspotClient.crm.companies.basicApi.update(id,simplePublicObjectInput).then((res:any) => res.body);
            }else if(objects === "deals"){
                
                apiResponse = await hubspotClient.crm.deals.basicApi.update(id,simplePublicObjectInput).then((res:any) => res.body);
            }else if(objects === "tickets"){
                
                apiResponse = await hubspotClient.crm.tickets.basicApi.update(id, simplePublicObjectInput).then((res:any) => res.body);
            }
            return apiResponse;
        } catch (e:any) {
            e.message === 'HTTP request failed'
                ? console.error(JSON.stringify(e.response, null, 2))
                : console.error(e)
        }
    }

    /**
     * 
     * @param config 
     * @returns 
     */
  async getByPropertyName(config : {objects:hubspotObject, propertyName: string, value: any, operator:hubspotOparetor, properties:[], limit:number}): Promise<any> {
    const hubspotClient = new hubspot.Client({ accessToken:this.hapiKey});

    let options = {
        "filterGroups": [{ "filters": [{ propertyName: config.propertyName, "operator": config.operator as string, "value": config.value }] }],
        "properties": config.properties,
        "limit" : config.limit

    }

     // @ts-ignore
     let apiResponse;
     if(config.objects === "contacts"){
         // @ts-ignore
         apiResponse= await hubspotClient.crm.contacts.searchApi.doSearch(options).then((res:any ) => JSON.parse(JSON.stringify(res.body.results))) 
     }else if(config.objects === "companies"){
        // @ts-ignore
        apiResponse=  await hubspotClient.crm.companies.searchApi.doSearch(options).then((res:any ) => JSON.parse(JSON.stringify(res.body.results))) 
     }else if(config.objects === "deals"){
         // @ts-ignore
         apiResponse= await hubspotClient.crm.deals.searchApi.doSearch(options).then((res: any) => JSON.parse(JSON.stringify(res.body.results))) 
     }else if(config.objects === "tickets"){
         // @ts-ignore
         apiResponse=  await hubspotClient.crm.tickets.searchApi.doSearch(options).then((res: any) => JSON.parse(JSON.stringify(res.body.results))) 
     }
     return apiResponse;

}
}