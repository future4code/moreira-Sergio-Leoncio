import { ROLES_DURATION, ROLES_STATUS } from "./DogheroTypes"

export type DogheroInputDTO = {
    id?: string
    name_pets:string[]
    date_schedule: Date
    latitude: string
    longitude: string
    date_start: Date
    date_end: Date
}