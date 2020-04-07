declare module "@salesforce/apex/ContactController.getContact" {
  export default function getContact(param: {accId: any}): Promise<any>;
}
declare module "@salesforce/apex/ContactController.bookTable" {
  export default function bookTable(param: {ConIdStr: any}): Promise<any>;
}
declare module "@salesforce/apex/ContactController.saveContacts" {
  export default function saveContacts(param: {chkBookLst: any, ConIdStr: any}): Promise<any>;
}
