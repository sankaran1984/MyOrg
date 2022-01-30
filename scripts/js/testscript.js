const sfdx = require('sfdx-node');
const fs = require('fs');

const SF_CERT = process.env.SF_CERT;
const SF_CLIENT_ID = process.env.SF_CLIENT_ID;

// create cert file from env var
fs.writeFile('cert.key', process.env.SFDX_CERT);

// login to devhub
sfdx.auth.jwt.grant({
    username : 'sankaranid@gmail.com',
    jwtkeyfile : 'cert.key',
    clientid : SF_CLIENT_ID,
    setdefaultdevhubusername : true
});

