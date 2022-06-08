import { ROLES_DURATION, ROLES_STATUS } from "./DogheroTypes"

export type DogheroInputDTO = {
    id?: string
    name_pets:string[]
    status: ROLES_STATUS
    date_schedule: Date
    price: number 
    latitude: string
    longitude: string
    duration?: ROLES_DURATION
    date_start: Date
    date_end: Date
}