// todo implement all your server-side properties of patient
import {HumanName} from "./HumanName";
import {Identifier} from "./Identifier";
import {ContactPoint} from "./ContactPoint";
import {Address} from "./address";

export type Gender = 'unknown' | 'male' | 'female' |'other;'

//hier herrscht der FHIR Standard
export interface Patient {
    id?: string ,         //ohne fragezeichen: man muss das angeben; ? bedeutet optional
    resourceType?: string,
    identifier?: Array<Identifier>,
    name?: Array<HumanName>,
    //public name: HumanName[],
    telecom?: Array<ContactPoint>,
    active?: boolean,
    gender?: string,
    birthDate?: Date,
    deceasedBoolean?: boolean,
    address?: Array<Address>

}


