import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const UseProjects = () => {
    const {data:projects=[], refetch} = useQuery({
        // queryKey:['projects'],
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:3000/projects')
            return res.data
        }
    })
    console.log(projects)
    return [projects,refetch]
};

export default UseProjects;
