import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const CreateProjects = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const projectinfo = {
            title: data.title,
            description: data.description,
            second:0,
            minute:0,
            hour:0,
        }
        console.log(projectinfo)
        axios.post("http://localhost:3000/projects", projectinfo)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire("Good job!", " Posted to the database", "success");
                    reset()
                }
            })

    }
    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>

                        <input type="text" {...register("title", { required: true })} placeholder="Meal Title" className="input input-bordered" required />

                        {errors.title && <span className='text-red-500'>title is required</span>}

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description
                            </span>
                        </label>

                        <input type="text" {...register("description", { required: true })} placeholder="Description" className="input input-bordered" required />

                        {errors.description && <span className='text-red-500'>Meal image is required</span>}

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Task</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default CreateProjects;