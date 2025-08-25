
export interface IGetUserByIdDTO {
    id: string
    name: string;
    email: string;
    password: string;
    active?: boolean;
}