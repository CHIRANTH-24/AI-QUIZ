import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseCard = ({ course }) => {
    return (
        <div className='border rounded-lg shadow-md p-4'>
            <div >
                <div className='flex justify-between items-center'>
                    <Image src="/assets/content.png" alt="other" height={50} width={50} />
                    <h2 className="text-[10px] p-1 px-2 rounded-full"> Date</h2>
                </div>
                <h2 className='text-xl font-semibold'>{course?.courseLayout?.courseTitle}</h2>
                <p className="text-sm text-gray-600 line-clamp-3 mt-2">{course?.courseLayout?.courseSummary}</p>
               
            </div>

            <div className='mt-3 flex '>
                {course?.status == "Generating" ? <Button className="bg-slate-500 text-white" ><RefreshCcw className='animate-spin' />Generating...</Button> : <Link href={'/course/' + course?.courseId}><Button>View</Button></Link>}
            </div>
        </div>
       
    )
}

export default CourseCard
