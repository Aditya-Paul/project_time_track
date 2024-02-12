import React, { useEffect, useState } from 'react';
import Convert from '../../Component/Convert';
import UseProjects from '../../Hook/UseProjects';

const Projects = () => {
    // const [projects, refetch] = UseProjects()
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setdata(data)
            })

    }, [])
    
    return (
        <div>
            {
                data?.map(item => <>
                    <h1>{item.title}</h1>
                    <div className='bg-slate-400'>
                        <Convert sec={item.second} min={item.minute} hour={item.hour} projectID={item._id} ></Convert>
                    </div>
                </>)
            }

            this is projects

        </div>
    );
};

export default Projects;