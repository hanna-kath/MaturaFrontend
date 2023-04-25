import { CodeableConcept } from "./CodeableConcept";
import { Identifier } from "./Identifier";
import { Reference } from "./Reference";

export type Status = 'active' | 'inactive' | 'enteredinerror';

export interface Medication {
    id?: any,
    identifier?: Identifier[],
    code?: CodeableConcept,
    status?: Status,
    marketingAuthorizationHolder?: Reference,
    doseForm?: any,
    totalVolume?: any,
    ingredient?: any[],
    batch?: any,
    definition?: Reference
}