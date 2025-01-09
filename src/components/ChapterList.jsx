import React from 'react'

const ChapterList = ({ course }) => {
    const Chapters = course?.courseLayout?.chapters;
  return (
    <div className='mt-5 '>
          <h2 className='font-medium text-xl'>Chaptes</h2>
          {
              Chapters?.map((chapter, index) => {
                return <div key={index} className="cursor-pointer flex gap-5 items-center p-4 border shadow-md mb-2 rounded">
                      <h2 className="text-2xl">{index+1}</h2>
                    <div>
                      <h2 className="font-medium">
                        {chapter?.chapterTitle}
                      </h2>
                      <p className='line-clamp-1 text-gray-400'>{chapter?.summary}</p>
                      </div>
                  </div>
              })
          }
    </div>
  )
}

export default ChapterList
