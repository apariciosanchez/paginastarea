import DBLocal from "db-local";
import crypto from "crypto"
const { Schema } = new DBLocal({path: "./db"})

const User = Schema('user', {
    _id: { required: true, },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

export default class {
    static create({ username, password }) {
        validation.name(username)
        validation.password(password)

        console.log('username' + username, 'password' + password)
        const userDuplicate = User.findOne({username})
            if(userDuplicate) throw new Error('userDuplicste')

            const id = crypto.randomUUID()

            User.create({
              _id :id,
              username:username,
              password:password
            }).save()
            return id
    }

    static login({username,password}){
        validation.name(username)
        validation.password(password)

        const user=User.findOne({username})
        if(!user) throw new Error("user doos not exit")
            return user
    }
}

export class validation {

    static name(username) {
        if (typeof username !== 'string') {
            throw new Error('the username must be a string')

        }

        if (username.length < 3) {
            throw new Error('the username must be at least 3 characters long')
    
        }
    }

    static password(password) {
        if (typeof password != 'string') throw new Error('the possword must be string');

        if (password.length < 6) throw new Error('password must be the 6 caracters')
    }
}

