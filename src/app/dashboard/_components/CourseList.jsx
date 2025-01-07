"use client";
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard';

const CourseList = () => {

    
    const { user } = useUser();

    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        user && GetCourseList();
    }, [user])

    const GetCourseList = async () => {
        const result = await axios.post("/api/courses", {
            createdBy: user?.fullName
        })
        
        setCourseList(result.data.result);
        console.log(courseList);
    }
    return (
        <div>
            
            <h2 className="font-bold text-2xl mt-10">Your study material</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5">
                {
                    courseList?.map((course, index) => {
                        return <CourseCard course={course} key={index} />;
                    })
                }
            </div>
        </div>
    )
}

export default CourseList
