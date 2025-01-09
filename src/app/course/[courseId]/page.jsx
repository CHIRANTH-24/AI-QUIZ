"use client";
import ChapterList from '@/components/ChapterList';
import CourseIntroCard from '@/components/CourseIntroCard';
import StudyMaterialSection from '@/components/StudyMaterialSection';
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
    <div className=''>
          <UserButton />
          <div className="mx-10 md:mx-36 lg-px-60 mt-10">
          <CourseIntroCard course={course} />
          <StudyMaterialSection />
          <ChapterList course={course} />
          </div>
    </div>
  )
}

export default page
