import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    //Test for continuous deployment
    @Get()
    test() {
        return 'Le back fonctionne, tudo bem.';
    }

}
