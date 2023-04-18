import { Identifier } from "./Identifier";

export interface VisionPrescription {
    resourceType?: any;
    id?: any;
    patient?: any[];
    dateWritten?: any;
    status?: any;
    identifier?: Identifier[];
}