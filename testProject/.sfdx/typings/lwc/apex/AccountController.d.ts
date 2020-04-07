declare module "@salesforce/apex/AccountController.getAccout" {
  export default function getAccout(param: {Accountdata: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountController.showContact" {
  export default function showContact(param: {accWrapLst: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountController.bookTable" {
  export default function bookTable(param: {ConIdStr: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountController.saveContacts" {
  export default function saveContacts(param: {chkBookLst: any, ConIdStr: any}): Promise<any>;
}
