export interface UserModel {
    id: string;
    name: string;
    lastname?: string;
    salary: number;
  }
  
  
export type UserRequiredProps = Pick<UserModel, 'name' | 'salary'>;

export function calculateUsersGrossSalaries(users: UserModel[]) {
  return users.reduce((total, user) => {
    return total + parseInt(`${user.salary}`, 10) || 0;
  }, 0);
}