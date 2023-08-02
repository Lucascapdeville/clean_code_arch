export default class Name{
    name: string
    constructor(name: string){
        if(this.validate_name(name)){
            this.name = name
        }
        else{
            throw new Error('Nome não valido')
        }
        }
    validate_name(name: string){
        let name_regex = new RegExp(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi);
        return name_regex.test(name)
    }
}
