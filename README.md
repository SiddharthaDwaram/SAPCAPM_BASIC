# Getting Started

Welcome to your new project.
g
It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


npm install
npm install -g hana-cli
hana-cli createModule

cf api <API Endpoint of your landscape> 
cf login 

cds add hana --for hybrid 
cds add hana --for production
cds add mta

cds deploy --to hana 
cds deploy --to hana --profile hybrid 

 

cds add xsuaa 
 

Build the MTA module from your project root folder:- mbt build -t ./ 
Deploy the module to your current Cloud Foundry space: v - cf deploy cpapp_1.0.0.mtar 

The deployment can take some minutes. After successful deployment, check if all the services have been created: 
cf services 

to check the MBT version - mbt --version 

to install the mbt archive builder  - npm install --global mbt 
 

 

 