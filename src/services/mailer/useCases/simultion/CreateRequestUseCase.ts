import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IRequestContactDTO } from './IRequestDTO'
import { emailBody } from '../../providers/emailBody'

export class CreateRequestUseCase {
    constructor(
        private mailProvider: IMailProvider
    ){}

    async execute(data: IRequestContactDTO):Promise<User>{
      const newContact = new User(data)
        try {
            const type = 1
                await this.mailProvider.sendMail({
                    to:{
                        name:data.name,
                        address: data.email
                    },
                    from:{
                        name:'Equipe Atlântica Solar',
                        address:'contato@atlanticasolar.com.br'
                    },
                    subject:'Atlântica Solar',
                    body:String(emailBody.clients(data.name,type))
                })
                await this.mailProvider.sendMail({
                    to:{
                        name:'Equipe Atlântica Solar',
                        address:'contato@atlanticasolar.com.br'
                    },
                    from:{
                        name:data.name,
                        address: data.email
                    },
                    subject:`Contato do Site - ${data.name}`,
                    body:String(emailBody.team(newContact,type))
                })  
          return (newContact)
        } catch (error) {
            throw new Error('Unexpected error whiling Send new contact email')
        }
    }
}

