import { Address } from "./Address";
import { ContactPoint } from "./ContactPoint";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Gender } from "./Patient";

export interface Practitioner {
    resourceType?: string;
    id?: string;
    name?: HumanName[];
    telecom?: ContactPoint[];
    address?: Address[];
    identifier?: Identifier[];
    active?: boolean;
    gender?: Gender;
    birthDate?: Date;
    //photo?: Attachment[];
    //qualification?: PractiotionerQualification[];
    //communication?: CodeableConcept[];

}
