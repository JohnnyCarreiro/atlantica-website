export class User {
    public source?: string
    public name!: string
    public email!: string
    public phone!: string
    public company?: string
    public value?: string
    public zipcode?: string
    public observation!: string

    constructor(props:User){
        Object.assign(this, props)
    }
}
