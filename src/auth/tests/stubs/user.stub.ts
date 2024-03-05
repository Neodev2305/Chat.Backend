import { CreateUserDto } from '@/user/dto/create-user.dto';
import { User } from '@/user/user.schema';

type UserStub = {
    createUser: CreateUserDto
}

export const userStub = (): UserStub => {
  return {
    createUser: {
        user_name: 'Trần Quốc Phi',
        user_email: 'tranquocphi123',
        user_avatar: '',
        user_password: '123456',
        user_confirm_password: '123456'
    }
  };
};
