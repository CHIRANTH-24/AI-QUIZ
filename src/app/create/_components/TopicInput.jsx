import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TopicInput = ({ setTopic, selectDifficultyLevel }) => {
  return (
    <div className="">
          <h1>Enter your Text here:</h1>
          <Textarea placeholder="enter your prompt here" className="mb-10 w-full" onChange={(e)=>{setTopic(e.target.value)}} />
          <h1 className="mt-5">Select your difficulty level:</h1>
          <div>
              <Select onValueChange={(value)=>selectDifficultyLevel(value)}>
                  <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Moderate">Moderate</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
              </Select>

          </div>
    </div>
  )
}

export default TopicInput
