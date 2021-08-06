import axios from "axios";

const API2=axios.create({baseURL:"https://jsonplaceholder.typicode.com"})

export const get=(id)=>API2.get(`posts/${id}/comments`);