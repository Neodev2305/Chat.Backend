import { userStub } from "../tests/stubs/user.stub";

export const AuthenticationService = jest.fn().mockReturnValue({
    registerLocalAccount: jest.fn().mockResolvedValue(userStub),
    loginLocalAccount: jest.fn().mockResolvedValue(userStub)
})