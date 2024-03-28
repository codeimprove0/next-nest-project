import { Module } from '@nestjs/common';
import { DashboardController } from './controllers/dashboard.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadStatusEntity } from './entities/status.entity'
import { DashboardService } from './dashboard.service'
import {User} from './entities/user.entity';
import {ResponseUtil} from '../common/response.util'

@Module({
  imports: [TypeOrmModule.forFeature([User,LeadStatusEntity])],
  controllers: [DashboardController],
  providers: [DashboardService,ResponseUtil ],
})
export class DashboardModule {}
