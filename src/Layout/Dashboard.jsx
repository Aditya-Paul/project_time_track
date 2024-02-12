import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const a = ["আনন্দবাজার", "ai somoy"]
    return (
        <div>
            <div className='flex pt-24 md:pt-20'>
                <div className="w-64 min-h-screen border-4 border-pink-50 rounded-xl">
                    <ul className='menu'>

                        <li>
                            <NavLink to="/createprojects">Create Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        {
                            a.map(item => <li>
                                <NavLink to={`/news/${item}`}>{item}</NavLink>
                                
                            </li>)
                        }

                    </ul>
                </div>
                <div className='flex-1 p-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;