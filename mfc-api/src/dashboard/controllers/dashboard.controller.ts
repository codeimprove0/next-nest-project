import { Controller,Get,UseGuards } from '@nestjs/common';
import {DashboardService} from '../dashboard.service'; 
import { ResponseUtil } from '../../common/response.util';
import { AuthGuard } from '@nestjs/passport';

@Controller('dashboard')
export class DashboardController {
 
    constructor(private dashService :DashboardService,
        private readonly responseUtil: ResponseUtil
        ){}
 
    @Get('list')
    @UseGuards(AuthGuard('jwt')) 
    async statusList(): Promise<any>{
        let response = await this.dashService.getStatusList();
        return this.responseUtil.successResponse(response) 
    } 
}
