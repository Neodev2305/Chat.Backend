import { AccessTokenStrategy } from "@/common/strategies";
import { AuthInfo } from "@/common/types/auth.type";
import { User } from "@/user/user.schema";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthenticationController } from "../authentication/authentication.controller";
import { AuthenticationService } from "../authentication/authentication.service";
import { userStub } from "./stubs/user.stub";


jest.mock('../authentication/authentication.service');

describe('AuthenticationController', () => {
    let controller: AuthenticationController;
    let authenticationService: AuthenticationService;
    const mockAuthentication = {
    
    };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthenticationController],
            providers: [AuthenticationService]
        }).overrideProvider(AuthenticationService).useValue(mockAuthentication).compile();

        controller = module.get<AuthenticationController>(AuthenticationController);
        authenticationService = module.get<AuthenticationService>(AuthenticationService);
        jest.clearAllMocks()
    });

    describe('register', () => {

        describe('when register funtion is called', () => {
            let auth: AuthInfo;
            beforeEach(async () => {
               auth =  await controller.registerLocalAccount(userStub().createUser);
            })
        });
    });
})