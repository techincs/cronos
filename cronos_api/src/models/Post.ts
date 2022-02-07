import { sequelize } from "../instances/mysql";
import { Model, DataTypes } from "sequelize";

export interface PostInstance extends Model {
    id: number;
    post: string;
    description: string;
}

export const Post = sequelize.define<PostInstance>('Post', {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER   
   },
   post : {
      type: DataTypes.STRING  
   },
   description : {
      type: DataTypes.STRING  
 }
},{
    tableName: 'post',
    timestamps: false 
});