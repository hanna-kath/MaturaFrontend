import { ContactDetail } from "./ContactDetail";
import { DependsOn } from "./DependsOn";

export type Status = 'draft' | 'active' | 'retired' |'unknown';


export interface ImplementationGuide {
    id?: string ,         //ohne fragezeichen: man muss das angeben; ? bedeutet optional
    date?: Date,
    status?: Status,
    contact?: Array<ContactDetail>,
    dependsOn?: Array<DependsOn>,
    name?: string,
    url?: string

}