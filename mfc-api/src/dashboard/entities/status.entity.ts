 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DB_CONST } from "../../config/db.constants";

@Entity({ name: DB_CONST.INCENTIVE_AMOUNT })
export class LeadStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  scheme_id: number; 

  @Column()
  status: number;  
  
 
 
}
