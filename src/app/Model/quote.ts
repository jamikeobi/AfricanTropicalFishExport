export class QuoteFormData{
    constructor(
        public fname: string,
        public lname: string,
        public email: string,
        public phoneNumber: string,
        public fishType: string,
        public quantity: string,
        public optionalFishType: string,
        public message: string,
        public date: string,
        public id: string
    ){}
}