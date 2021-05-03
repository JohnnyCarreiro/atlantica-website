export type IParams = {
    source?:string
    name:string
    email:string
    phone:string
    company?:string
    value?:string
    zipcode?:string
    observation:string
    id?:string
}
export const emailBody = {
        clients(name:string, type:number){           
             const client1 = `<p> Olá ${name}, tudo bem? <br><br> Gostaríamos de agradecer pelo contato, em breve você receberá nossa simulação. E nos próximos dias um de nossos representantes entrará em contato contigo para que possamos nos conhecer melhor! <br> Lembrando que você pode entrar em contato diretamente atravéz de nosso whatsApp: (11) 99825-3434. <br><br> Att, Equipe da Atlântica Solar <p>`
             const client3 =`<p> Olá ${name}, tudo bem? <br><br> Gostaríamos de agradecer pelo contato, um de nossos representantes entrará em contato contigo para que possamos nos conhecer melhor! <br> Lembrando que você pode entrar em contato diretamente atravéz de nosso whatsApp: (11) 99825-3434. <br><br> Att, Equipe da Atlântica Solar <p>`
             if(type === 1) return client1
             if(type === 2) return client3
        },
        team(params:IParams, type:number, _source?:string){
            
            const team1 = `Recebemos um novo contato em nosso site para uma simulação, seguem os dados do cliente: <br><br>Name: ${params.name}<br> Email: ${params.email}<br> whatsApp: ${params.phone}<br> Empresa: ${params.company}<br> Valor: ${params.value}<br> CEP: ${params.zipcode} Observações: ${params.observation}<br>  fonte: ${params.source} <p>`
            const team3 = `Recebemos um novo contato em nosso site, seguem os dados do cliente: <br><br>ID: ${params.id}<br> Name: ${params.name}<br> Email: ${params.email}<br> whatsApp: ${params.phone}<br> Message: ${params.observation}<br> fonte: ${params.source} <p>`
            if(type === 1) return team1
            if(type === 2) return team3
        }
}
