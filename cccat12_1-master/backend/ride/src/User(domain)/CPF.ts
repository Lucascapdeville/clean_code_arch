// @ts-nocheck

export default class CPF{
    document: string;

    constructor (document: string){
        if (this.validatecpf(document)){
            this.document = document
        }
        else{
            throw new Error('CPF não valido');
        }
    }
    validatecpf (cpf: string) {
        cpf = this.replace_cpf(cpf);
        if (this.length_cpf(cpf))return false;
        if (this.repeting_cpf(cpf))return false;
        let acumulatordigit1, acumulatordigit2;   
        let digito;  
        acumulatordigit1 = acumulatordigit2 = 0;  
        for (let nCount = 1; nCount < cpf.length -1; nCount++) {
                digito = parseInt(cpf.substring(nCount -1, nCount));  							
                acumulatordigit1 = acumulatordigit1 + ( 11 - nCount ) * digito;  
                acumulatordigit2 = acumulatordigit2 + ( 12 - nCount ) * digito;  
        };
        let digit1,digit2,rest;
        digit1 = digit2 = rest = 0;  
        rest = (acumulatordigit1 % 11);  
        digit1 = (rest < 2) ? digit1 = 0 : 11 - rest;
        acumulatordigit2 += 2 * digit1;  
        rest = (acumulatordigit2 % 11);  
        digit2 = (rest < 2)  ? digit2 = 0 : 11 - rest;
        let DigVerification = cpf.substring(cpf.length-2, cpf.length);
        let nDigResult;  
        nDigResult = "" + digit1 + "" + digit2;  
        return DigVerification == nDigResult;
    }
    replace_cpf(cpf: string){
        cpf=cpf.replace('.','').replace('.','').replace('-','').replace(" ","")
        return cpf;
        }
    
    length_cpf(cpf){
        return cpf.length != 11;
    }

    repeting_cpf(cpf){
        return cpf.split("").every(c => c === cpf[0]);
    }

    replace_cpf(cpf){
        cpf=cpf.replace('.','').replace('.','').replace('-','').replace(" ","")
        return cpf;
    }
}