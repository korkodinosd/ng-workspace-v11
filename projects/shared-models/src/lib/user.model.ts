export interface UserModel {
    id: string;
    name: string;
    lastname?: string;
    salary: number;
  }
  
  
export type UserRequiredProps = Pick<UserModel, 'name' | 'salary'>;