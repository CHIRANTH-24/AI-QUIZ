import React from 'react'
import MaterialCardItem from './MaterialCardItem'

const StudyMaterialSection = () => {

    const MaterialList = [
        {
            name: 'Notes/Chapters',
            desc: 'Read notes to prepare it',
            icon: '/assets/exam.png',
            path: '/notes/'
        },
        // {
        //     name: 'Flash Cards',
        //     desc: 'Flash cards help to remeber the concept',
        //     icon: '/assets/content.png',
        //     path: '/flashcards'
        // },
        {
            name: 'Quiz',
            desc: 'Great way to test your knowledge',
            icon: '/assets/quiz.png',
            path: 'https://sensational-empanada-52c7a0.netlify.app/'
        },
        {
            name: 'Question/Answers',
            desc: 'Help to practice',
            icon: '/assets/qa.png',
            path:'https://app.droxy.ai/agent/6780a5cc87b7a00b52e19062'
        }
    ]
  return (
    <div className='mt-8'>
          <h2 className="font-medium text-xl">Study Material </h2>
          <div className='grid grid-cols-2 md:grid-cols-3'>
              {
                  MaterialList.map((item, index) => {
                      return <MaterialCardItem item={item} key={index} />
                  })
              }
          </div>
          
    </div>
  )
}

export default StudyMaterialSection
