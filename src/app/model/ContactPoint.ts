import { Period } from "./Period";

export type System = 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
export type Use = 'home' | 'work' | 'temp' | 'old' | 'mobile';


export interface ContactPoint {
    system?: System,
    value?: string,
    use?: Use,
    rank?: number,
    period?: Period
    text?: string
}
