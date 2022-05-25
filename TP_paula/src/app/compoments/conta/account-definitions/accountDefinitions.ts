export interface IAccountSettings {
    name: string;
    email: string;
    sex: string;
    password: string;
}

export interface IUpdateAccountSettings {
    currentPassword: string;
    newPassword: string;
    newEmail: string;
    sex: string;
}