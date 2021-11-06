const TIMEOUT = 5000;

const devBaseURL = "http://boot.jeecg.com:8080";

const proBaseURL = "http://boot.jeecg.com:8080";

const prod = 'jeecg-boot/sys'

console.log(process.env.NODE_ENV);

const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export { TIMEOUT, prod, baseURL }