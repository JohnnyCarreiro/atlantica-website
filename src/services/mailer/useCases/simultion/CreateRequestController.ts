import { NextApiRequest, NextApiResponse } from 'next'
import { CreateRequestUseCase }  from './CreateRequestUseCase'


export class CreateRequestController{
    constructor(
        private createUserUseCase: CreateRequestUseCase
    ){}
    async handle(request:NextApiRequest, response:NextApiResponse): Promise<NextApiResponse>{
        const { source,name, email, phone, company, value, zipcode, observation } = request.body

        try{
            await this.createUserUseCase.execute({source,name, email, phone, company, value, zipcode, observation})
            return response.status(200)
        }catch(err){
            if(err.message === 'User already contacted us before'){
                return response.status(500)
            }
            return response.status(500)
        }
    }
}