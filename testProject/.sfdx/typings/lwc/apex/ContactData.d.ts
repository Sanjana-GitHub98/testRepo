declare module "@salesforce/apex/ContactData.getContacts" {
  export default function getContacts(): Promise<any>;
}
declare module "@salesforce/apex/ContactData.getBookingData" {
  export default function getBookingData(param: {ConIdStr: any}): Promise<any>;
}
declare module "@salesforce/apex/ContactData.saveContacts" {
  export default function saveContacts(param: {chkBookLst: any, ConIdStr: any}): Promise<any>;
}
