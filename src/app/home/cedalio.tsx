import CedalioSDK from "@cedalio/sdk-js";

const cedalioSdk = new CedalioSDK({
    projectId: '01HDKWADPKCK9WF991H52TW3SH'
});

const response = await cedalioSdk.login({ address: '0x66f0fC1b697258C8F133e51fB44Bd65d82f23015' }); 
console.log(response);