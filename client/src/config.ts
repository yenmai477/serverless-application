// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'm3irecprkg'
const region = 'us-east-1'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-056de2-1.us.auth0.com',            // Auth0 domain
  clientId: '9FGBCSVcZ5FPQD1cr82qNcdbDTbT48OU',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
