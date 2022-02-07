import { sequelize } from "../instances/mysql";
import { Model, DataTypes } from "sequelize";

export interface TeamMemberInstance extends Model {
    id: number;
    name: string;
    team: string;
}

export const TeamMember = sequelize.define<TeamMemberInstance>('TeamMember', {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER   
   },
   name : {
      type: DataTypes.STRING  
   },
   team : {
      type: DataTypes.STRING  
 }
},{
    tableName: 'teammember',
    timestamps: false 
});