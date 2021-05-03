import { Attachment } from 'nodemailer/lib/mailer'

type Address = {
    name: string
    address: string
}

export interface IMessage{
    to: Address
    from: Address
    subject: string
    body: string
    attachment?: Attachment
}

export interface IMailProvider {
    sendMail(message: IMessage):Promise<void>
}