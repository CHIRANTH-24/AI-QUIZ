"use client";
import React, { useState, useEffect } from 'react';
import SelectOption from './_components/SelectOption';
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import { useUser } from "@clerk/nextjs";
import  { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Create = () => {
        const user = useUser();
        const [state, setState] = useState(0);
        const [formData, setFormData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const courseId = uuidv4();
        const router = useRouter();
        const createdBy = user?.user?.fullName || "unknown";
        const handleUserInput = (fieldName, fieldValue) => {
                setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
                console.log(formData);
        };

        useEffect(() => {
                console.log("Updated formData:", formData);
                
        }, [formData]);
        
       
        const GenerateCourseOutline = async () => {
                setIsLoading(true);
                        const result = await axios.post('/api/generate-course-outline', {
                                courseId: courseId,
                                ...formData,
                                createdBy: createdBy,
                        });

                        console.log("API is hit", result.data.result.resp);
                setIsLoading(false);
                router.replace("/dashboard");
                toast("Your course content is generating, Click on refresh");

        };
        return (
                <div className='w-full mt-10'>
                        <div className='flex-row justify-evenly'>
                                <h1 className='text-xl mt-10'>Header</h1>
                                <div className='mt-10 flex justify-between'>
                                        {state == 0 ?
                                                <SelectOption selectedStudyType={(value) => handleUserInput('studyType', value)} /> :
                                                <div className='ml-10'>
                                                        <TopicInput selectDifficultyLevel={(value) => handleUserInput('difficulty', value)} setTopic={(value) => handleUserInput('topic', value)} />
                                                </div>
                                        }
                                </div>
                        </div>
                        <div className='flex justify-evenly'>
                                {state != 0 ? <Button variant="outline" onClick={() => setState(state - 1)}>Previous</Button> : <div>No prev</div>}
                                {state == 0 ?
                                        <Button onClick={() => setState(state + 1)}>Next</Button> :
                                        <Button onClick={GenerateCourseOutline} disabled={isLoading}>
                                                {isLoading ? 'Generating...' : 'Generate'}
                                        </Button>
                                }
                        </div>
                </div>
        );
};

export default Create;
