// todo implement all your server-side properties of patient
import {HumanName} from "./humanName";
import {Identifier} from "./identifier";
import {ContactPoint} from "./contactPoint";
import {Address} from "./address";

export class Patient {
  constructor(
    public id: string = '',
    public resourceType: string = 'Patient',
    public identifier?: Array<Identifier>,
    //public name?: Array<HumanName>,
    public name?: HumanName[],
    public telecom?: Array<ContactPoint>,
    public active: boolean = false,
    public gender: string = 'unknown',
    public birthDate: Date = new Date(1000, 1, 1),
    public deceasedBoolean?: boolean,
    public address?: Array<Address>
  ) {
  }
}
