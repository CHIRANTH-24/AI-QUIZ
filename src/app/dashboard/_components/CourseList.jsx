"use client";
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard';
import { RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from "@/components/ui/skeleton"


const CourseList = () => {

    
    const { user } = useUser();

    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        user && GetCourseList();
    }, [user])

    const GetCourseList = async () => {
        setLoading(true);
        const result = await axios.post("/api/courses", {
            createdBy: user?.fullName
        })
        
        setCourseList(result.data.result);
        console.log(courseList);
        setLoading(false);
    }
    return (
        <div>
            
            <h2 className="font-bold text-2xl mt-10 flex justify-between">Your study material
                <Button variant="outline" onClick={GetCourseList}><RefreshCcw />Refresh</Button>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5">
                {
                    loading!=true ? courseList?.map((course, index) => {
                        return <CourseCard course={course} key={index} />;
                    }) : [1, 2, 3, 4, 5, 6].map((item, index) => {
                        return <div className="h-56 w-full flex flex-col ">
                            <Skeleton className="h-[200px] w-[250px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CourseList
