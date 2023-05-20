import { Client } from "appwrite";


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6468cdf0c98ca52c4214');

export default client;
