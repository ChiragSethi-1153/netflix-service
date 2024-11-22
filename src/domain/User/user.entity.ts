import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryColumn({unique: true, type:'uuid'})
    uuid: string;

    @Column({type: 'varchar', nullable: false, length:50, unique: true})
    username: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    name: string;
  
    @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
    email: string;
    
    @Column({ type: 'varchar', length: 50, nullable: false })
    password: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    @Exclude()
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    @Exclude()
    updated_at: Date;
}