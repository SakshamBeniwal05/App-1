import { Client, Databases, Query, Storage, ID } from "appwrite"
import config from "../config";


export class Document_services {
    client = new Client;
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.url)
            .setProject(config.id);
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async create({ title, slug, content, featured_image, status, userId }) {
        try {
            await this.database.createDocument(config.db_id, config.c_id, slug, { title, content, featured_image, status, userId })
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : create ${error}`);
        }
    }

    async update(slug, { title, content, featured_image, status }) {
        try {
            return await this.database.updateDocument(config.db_id, config.c_id, slug, { title, content, featured_image, status })
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : update ${error}`);
        }
    }

    async delete({ slug }) {
        try {
            await this.database.createDocument(config.db_id, config.c_id, slug)
            return true;
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : delete ${error}`);
            return false;
        }
    }
    async get({ slug }) {
        try {
            return await this.database.getDocument(config.db_id, config.c_id, slug);
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : get ${error}`);
        }
    }
    async gets() {
        try {
            return await this.database.listDocuments(config.db_id, config.c_id, [Query.equal("status", "active")])
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : gets ${error}`);
        }
    }
    async uplaod(file) {
        try {
            return await this.storage.createFile(config.s_id, ID.unique(), file);
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : upload ${error}`);
            return false;
        }
    }
    async deleeStorage(fileId) {
        try {
            await this.storage.deleteFile(config.s_id, fileId)
            return true;
        } catch (error) {
            console.log(`ERROR : SERVICE APPP.CONIFG.JS : deleteStorage ${error}`);
            return false;
        }
    }
    getpreview(fileId) {
        return this.storage.getFilePreview(config.s_id, fileId)
    }

}

const document_services = new Document_services()
export default document_services