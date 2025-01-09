import { Loader } from 'lucide-react'
import React from 'react'
import { Progress } from './ui/progress'
import Image from 'next/image'

const CourseIntroCard = ({ course }) => {
    return (
        <div className='flex gap-5 items-center p-5 border shadow-xl max- '>

            <div>
                <Image alt="image" src={'/assets/content.png' } height={70} width={50}/>
                <h1 className="text-xl">{course?.courseLayout?.courseTitle}</h1>
                <h4 className="line-clamp-2">{course?.courseLayout?.courseSummary}</h4>
                <Progress className="mt-3" />
                <h2  className='text-xl text-primary'>Total chapters:{course?.courseLayout?.chapters?.length}</h2>
                
            </div>

        </div>
    )
}

export default CourseIntroCard;
