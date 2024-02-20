export interface IProductItem {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number;
}

export interface IProductList {
    total: number;
    items: IProductItem[];
}

export interface IError {
    error: string;
}

export interface IAddressForm {
    payment: 'online' | 'upon receipt';
    address: string;
}

export interface IContactsForm {
    email: string;
    phone: string;
}

export interface IOrderRequest extends IAddressForm, IContactsForm {
    total: number,
    items: IProductItem['id'][];
}

export interface IOrderResult {
    id: string;
    total: number;
}

export type ContactsFormErrors = Partial<Record<keyof IContactsForm, string>>;

export type AddressFormErrors =  Partial<Record<keyof IAddressForm, string>>

interface IBasketModel {
    items: Set<string>;
    add(id: string): void;
    remove(id: string): void;
}

interface IOrderModel extends Partial<IOrderRequest> {
    addAddress(address: string): void;
    addPhone(phone: string): void;
    addEmail(email: string): void;
    addPayment(payment: 'online' | 'upon receipt'): void;
}

interface ICardComponent extends IProductItem {
    cardTemplate: HTMLTemplateElement;
    createCard(): void;
    openModal(): void;
}

interface IModalComponent {
    close(): void;
    submit(): void;  
}

interface IBasketComponent extends IModalComponent {
   remove(id: string): void;
}

interface IAddressComponent extends IModalComponent {
    toggle(payment: 'online' | 'upon receipt'): void;
    errors: AddressFormErrors;
    checkAddress(address: string): void;
}

interface IContactsComponent extends IModalComponent {
    errors: ContactsFormErrors;
    checkEmail(email: string): void;
    checkPhone(phone: string): void;
}

interface ISucсessComponent {
    close(): void;
} 





interface IEventEmitter {
    emit: (event: string, data: unknown) => void
}