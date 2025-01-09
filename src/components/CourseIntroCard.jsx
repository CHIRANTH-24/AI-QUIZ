import { Loader } from 'lucide-react'
import React from 'react'

const CourseIntroCard = ({ course }) => {
    return (
        <div className='flex gap-5 items-center p-5 border shadow-xl '>

            <div>
                <h1 className="text-xl">{course?.courseLayout?.courseTitle}</h1>
                <h4 className="line-clamp-2">{course?.courseLayout?.courseSummary}</h4>
                
            </div>

        </div>
    )
}

export default CourseIntroCard
