import axios from 'axios';

const request = axios.create({
  baseURL:'http://192.168.100.15:4000'
});

const config = {
   headers: {
       'Content-Type' : 'application/x-www-form-urlencoded'
   }
}
export const api = {
    //Post
    getPostList: async() => {
        let response = await request.get(`/post/lista`);
        return response.data;
    },

    createPost: async (newPost : any) => {
        var qs = require('qs');
        var data = qs.stringify(newPost);

        let response = await request.post(`/post`, data, config);
        return response.data;
    },

    updatePost: async(id : number, updatePost : any) => {
        var qs = require('qs');
        var data = qs.stringify(updatePost);

        let response = await request.put(`/post/${id}`, data);
        return response.data;
    },

    deletePost: async(id : number) => {
        let response = await request.delete(`/post/${id}`);
        return response.data;
    },
    
    // Sevices
    getServiceList: async() => {
        let response = await request.get(`/servico/lista`);
        return response.data;
    },

    createService: async(newService : any) => {
        var qs = require('qs');
        var data = qs.stringify(newService);

        let response = await request.post(`/servico`, data);
        return response.data;
    },

    updateService: async(id : number, updateService : any) => {
        var qs = require('qs');
        var data = qs.stringify(updateService);

        let response = await request.put(`/servico/${id}`, data);
        return response.data;
    },

    deleteService: async(id : number) => {
        let response = await request.delete(`/servico/${id}`);
        return response.data;
    },

    // Team Member
    getTeamMemberList: async() => {
        let response = await request.get(`/intgequipe/lista`);
        return response.data;
    },
    
    createTeamMember: async(newTeamMember : any) => {
        var qs = require('qs');
        var data = qs.stringify(newTeamMember);

        let response = await request.post(`/intgequipe`, data);
        return response.data;
    },
    
    updateTeamMember: async(id : number, updateTeamMember : any) => {
        var qs = require('qs');
        var data = qs.stringify(updateTeamMember);

        let response = await request.put(`/intgequipe/${id}`, data);
        return response.data;
    },
    
    deleteTeamMember: async(id : number) => {
        let response = await request.delete(`/intgequipe/${id}`);
        return response.data;
    },

}