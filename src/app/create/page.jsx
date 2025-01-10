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
import { TypewriterEffectSmooth } from '@/components/ui/type-writereffect';
import InputComponent from '@/components/InputComponent';

const Create = () => {
        const { user } = useUser();
        const [state, setState] = useState(0);
        const [formData, setFormData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const courseId = uuidv4();
        const router = useRouter();
        const createdBy = user?.fullName || "unknown";
        const handleUserInput = (fieldName, fieldValue) => {
                setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
                console.log(formData);
        };
        const words = [
                {
                        text: "Your AI-powered career companion is here",
                },
                
        ];
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
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-300 dark:to-pink-300 text-transparent bg-clip-text">Hello! {user?.fullName} </h1>
                                <h6 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-300 dark:to-pink-300 text-transparent bg-clip-text"><TypewriterEffectSmooth words={words} /></h6>       
                                <div className='mt-2'>
                                       
                                        <SelectOption selectedStudyType={(value) => handleUserInput('studyType', value)} />
                                        <div>
                                                <InputComponent />
                                        </div>
                                                <div className='mt-4'>
                                                        <TopicInput selectDifficultyLevel={(value) => handleUserInput('difficulty', value)} setTopic={(value) => handleUserInput('topic', value)} />
                                        </div>
                                        
                                        
                                </div>
                        </div>
                        <div className='flex justify-evenly'>
                                
                                        <Button onClick={GenerateCourseOutline} disabled={isLoading}>
                                                {isLoading ? 'Generating...' : 'Generate'}
                                        </Button>
                                
                        </div>
                </div>
        );
};

export default Create;


