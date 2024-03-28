 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
 
@Entity({ name: 'agentbox_lead_status' })
export class LeadStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; 

  @Column()
  status: number;  
  
  @Column()
  created_at: Date

  @Column()
  updated_at: Date 
 
}
