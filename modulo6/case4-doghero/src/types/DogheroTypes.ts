export enum ROLES_STATUS{
    A_FAZER = "A FAZER",
    ANDAMENTO = "ANDAMENTO",
    FEITO = "FEITO"
}

export enum ROLES_DURATION{
    TRINTA = "30",
    SESSENTA = "60"
}

export type updateStart = {
    id?: string
    status:string
}