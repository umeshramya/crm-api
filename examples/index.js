const {HubspotObjects} = require("hubspot-crm-api")
const dotEnv = require("dotenv").config()

const creatContact = async ()=>{
    try {
        let response = await new HubspotObjects().create({
            "email": "umesh@gmail.com",
            "firstname": "Umesh",
            "lastname": "Patil",
            "phone": "9243603720",
            "jobtitle": "admin",
            "userid": "2",
            "lifecyclestage": "customer"
        }, "contacts")
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}



const getCompany = async ()=>{
    try {
        let response = await new HubspotObjects().getByPropertyName({
            "limit" : 1,
            "objects" : "companies",
            "operator" : "EQ",
            "propertyName" : "orgid",
            "value" : 1,
            "properties" : []
        })

        console.log (response)
    } catch (error) {
        
    }
}

// creatContact()
getCompany();


