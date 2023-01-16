import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpRequest } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post("signup")
    async signUp(@Body() signUpRequest: SignUpRequest) {
        return this.authService.signUp(signUpRequest);
    }

    // @HttpCode(HttpStatus.OK)
    // @Post("signin")
    // signIn(@Body() signInRequest: SignInDto) {
    //     return this.authService.signIn(signInRequest);
    // }
}
