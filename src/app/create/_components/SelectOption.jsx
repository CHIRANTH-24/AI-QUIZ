"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const SelectOption = ({selectedStudyType}) => {
    const options = [
        {
            name: "exam",
            image: "/assets/exam_1.png"
        },
        {
            name: "job",
            image: "/assets/quiz.png"
        },
        {
            name: "practice",
            image: "/assets/practice.png"
        },
        {
            name: "code",
            image: "/assets/code.png"
        },
        {
            name: "other",
            image: "/assets/exam.png"
        }
    ]
    const [selected, setSelected] = useState("exam");
    useEffect(() => { setSelected(selected)},[])
  return (
    <div className=''>
          <h2>Select your category</h2>
          <div className='flex gap-10'>
              {
                  options.map((option, index) => {
                      return (
                          <div
                          key={index}
                              className={`border rounded hover:border-primary cursor-pointer${option.name==selected&&` border-primary`}`}
                              onClick={() => { setSelected(option.name); selectedStudyType(option.name) }}
                          >
                              <Image height={50} width={50} src={option.image} alt="img" />
                              <h1>{option.name}</h1>
                          </div>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default SelectOption
