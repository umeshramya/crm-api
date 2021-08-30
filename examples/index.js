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

creatContact()
