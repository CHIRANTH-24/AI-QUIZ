"use client";
import CourseIntroCard from '@/components/CourseIntroCard';
import { UserButton } from '@clerk/nextjs';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


function page() {
    const { courseId } = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() => { 
        GetCourse();
    }, []);
    const GetCourse =  async () => {
        const result = await axios.get('/api/courses?courseId=' + courseId);
        setCourse(result.data.result);
        console.log(result.data.result);

    }
  return (
    <div>
          <UserButton />
          
          <div>
              <CourseIntroCard course={course} />
          </div>
    </div>
  )
}

export default page
