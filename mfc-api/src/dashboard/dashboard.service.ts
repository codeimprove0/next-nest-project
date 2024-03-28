import { Injectable } from '@nestjs/common';

import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm'
import { Repository,EntityManager } from 'typeorm'
import { LeadStatusEntity } from './entities/status.entity'
 
@Injectable()
export class DashboardService {
    constructor(
        @InjectRepository(LeadStatusEntity) private statusRepo: Repository<LeadStatusEntity>,
        @InjectEntityManager() private entityManager: EntityManager,
    ) {

    } 

    getStatusList(): Promise<any[]> { 
        return this.statusRepo.find(); 
    }
}
