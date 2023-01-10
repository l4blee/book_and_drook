import { Collection, MongoClient, WithId } from 'mongodb'
import { hash } from 'bcrypt'


class Mongo {
    client: MongoClient
    users: Collection
    libraries: Collection
    playbill: Collection

    constructor(connectionURL: string) {
        console.log(`Connecting to Mongo via ${connectionURL}`)

        this.client = new MongoClient(connectionURL);
        this.users = this.client.db('platform').collection('users')
        this.libraries = this.client.db('platform').collection('libraries')
        this.playbill = this.client.db('platform').collection('playbill')

        console.log('Successfully initialized MongoDB instance, proceeding...')
    }
}

// Models
interface TLibrary extends WithId<Document> {
    title: string
    address: string
    booklist: string[]
    image: string
}

interface TPlaybill extends WithId<Document> {
    date: string
    time: string
    title: string
    place: string
    image: string
}


interface TUser extends WithId<Document> {
    login: string
    hashed_password: string
    salt: string
    donated: number
}

class UserModel {
    login: string

    // These two params are initially retrieved as BSONs [look at UserPayload]
    hashedPassword: string
    salt: string

    donated: number

    constructor(login: string, hashedPassword: string, salt: string, donated?: number) {
        this.login = login
        this.hashedPassword = hashedPassword
        this.salt = salt
        this.donated = donated || 0
    }

    static fromRecord(record: TUser) {
        return new UserModel(
            record.login,
            record.hashed_password,
            record.salt,
            record.donated
        )
    }

    async validate(password: string) {
        return await hash(password, this.salt) === this.hashedPassword
    }
}


export default (connectionURL: string) => {
    return new Mongo(connectionURL)
}

export { Mongo, UserModel }
export type { TUser, TPlaybill, TLibrary }