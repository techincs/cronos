import { sequelize } from "../instances/mysql";
import { Model, DataTypes } from "sequelize";

export interface ServiceInstance extends Model {
    id: number;
    name: string;
    description: string;
}

export const Service = sequelize.define<ServiceInstance>('Service', {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER   
   },
   name : {
      type: DataTypes.STRING  
   },
   description : {
      type: DataTypes.STRING  
 }
},{
    tableName: 'service',
    timestamps: false 
});