import config from "../config";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client;
    account;

    constructor() { 
        this.client
            .setEndpoint(config.url)
            .setProject(config.id);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
               return await this.login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : createAccount ${error}`);
        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : login ${error}`);
        }
    }

    async currentUser (){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : currrentUser ${error}`);
        }
        return null;
    }

    async logout () {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : logout ${error}`);
        }
    }
}


const authService = new AuthService();
export default authService;