const { HubspotObjects, Associations } = require("hubspot-crm-api");
const dotEnv = require("dotenv").config();

const creatContact = async () => {
  try {
    let response = await new HubspotObjects().create(
      {
        email: "umeshbilagi@gmail.com",
        firstname: "Umesh",
        lastname: "Patil",
        phone: "9243603720",
        jobtitle: "admin",
        // "userid": "2",
        lifecyclestage: "customer",
      },
      "contacts"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// creatContact()
//

const createCompany = async()=>{
  let response = await new HubspotObjects().create({
    "city": "Cambridge",
    "domain": "biglytics.net",
    "industry": "Technology",
    "name": "Biglytics",
    "phone": "(877) 929-0687",
    "state": "Massachusetts"
  }, "companies")
}

createCompany()

const getCompany = async () => {
  try {
    let response = await new HubspotObjects().getByPropertyName({
      limit: 1,
      objects: "companies",
      operator: "EQ",
      propertyName: "orgid",
      value: 1,
      properties: [],
    });

    console.log("response", response);
    return response;
  } catch (error) {}
};

// getCompany();

const update = async () => {
  let companyId = await getCompany().then((res) => res[0].id);
  try {
    let response = await new HubspotObjects().update(
      {
        name: "Jeevan Jyoti hospital and Reaserch Center",
      },
      companyId,
      "companies"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// creatContact()

// update()

//
/**
 * @hs_ticket_category PRODUCT_ISSUE | BILLING_ISSUE | FEATURE_REQUEST | GENERAL_INQUIRY
 * @hs_ticket_priority LOW | MEDIUM | HIGH

 * 
 */
const createTicket = async () => {
  try {
    let response = await new HubspotObjects().create(
      {
        hs_pipeline: 0,
        hs_pipeline_stage: 1,
        hs_ticket_category: "PRODUCT_ISSUE",
        hs_ticket_priority: "HIGH",
        closed_date: "2021-09-30",
        content: "We want Strong password limition in your software",
        // "hubspot_owner_id": "910901",
        subject: "1 Jeevanjyoti Hospital and research center",
      },
      "tickets"
    );

    console.log(response);

    let ticketid = JSON.parse(JSON.stringify(response)).id;
  } catch (error) {
    console.log(error);
  }
};

// createTicket()

const createAssociation = async () => {
  let companyId = "6581288132";
  let ticketid = "942578411";

  const response = await new Associations().create({
    fromObjectId: ticketid,
    fromObjectType: "tickets",

    toObjectId: companyId,
    toObjectType: "companies",
  });

  console.log(response);
};

// createAssociation()
