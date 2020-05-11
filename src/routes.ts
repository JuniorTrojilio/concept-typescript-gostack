import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request:Request, response: Response){
    const user = createUser({ 
        email : 'osmar.trojilio@gmail.com',
        password : '123456',
        techs : ['node', 'react']
    })

    return response.json({message : 'hello world'})
}