import { Controller, Get } from '@nestjs/common';
import { EnvService } from './env.service';

@Controller('env')
export class EnvController {
  constructor(private readonly envService: EnvService){}

  @Get()
  getUrl(){
    return this.envService.getDbUrl()
  }
}
