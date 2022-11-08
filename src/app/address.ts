export class Address {
  constructor(
    public use: string = '',
    public type: string = '',
    public text: string = '',
    public city: string = '',
    public district: string = '',
    public state: string = '',
    public postalcode: string = '',
    public country: string = '',
    public line: Array<String>
  ) {
  }
}
