import React, { useState } from 'react'
import { FileText, Link, Image, Code, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const InputTypes = {
    TEXT: 'text',
    PDF: 'pdf',
    LINK: 'link',
    IMAGE: 'image',
    CODE: 'code',
}

const DifficultyLevels = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard',
}

export default function InputComponent() {
    const [selectedType, setSelectedType] = useState(InputTypes.TEXT)
    const [difficultyLevel, setDifficultyLevel] = useState(DifficultyLevels.MEDIUM)
    const [inputContent, setInputContent] = useState('')
    const [file, setFile] = useState(null)

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
        }
    }

    const renderInput = () => {
        switch (selectedType) {
            case InputTypes.TEXT:
                return (
                    <Textarea
                        className="min-h-[200px] dark:bg-gray-800 border-2 border-transparent focus:border-indigo-400 dark:focus:border-indigo-300 transition-all"
                        placeholder="Enter your text here..."
                        value={inputContent}
                        onChange={(e) => setInputContent(e.target.value)}
                    />
                )
            case InputTypes.PDF:
            case InputTypes.IMAGE:
                return (
                    <div className="flex items-center justify-center w-full">
                        <Label
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer  dark:bg-gray-800  dark:hover:bg-gray-700 transition-all"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-4 text-indigo-400 dark:text-indigo-300" />
                                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {selectedType === InputTypes.PDF ? 'PDF' : 'PNG, JPG, GIF'} (MAX. 10MB)
                                </p>
                            </div>
                            <Input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept={selectedType === InputTypes.PDF ? '.pdf' : 'image/*'}
                                onChange={handleFileChange}
                            />
                        </Label>
                    </div>
                )
            case InputTypes.LINK:
                return (
                    <Input
                        type="url"
                        placeholder="Enter URL here..."
                        value={inputContent}
                        onChange={(e) => setInputContent(e.target.value)}
                        className=" dark:bg-gray-800 border-2 border-transparent focus:border-indigo-400 dark:focus:border-indigo-300 transition-all"
                    />
                )
            case InputTypes.CODE:
                return (
                    <Textarea
                        className="min-h-[200px] font-mono  dark:bg-gray-800 border-2 border-transparent focus:border-indigo-400 dark:focus:border-indigo-300 transition-all"
                        placeholder="Enter or paste your code here..."
                        value={inputContent}
                        onChange={(e) => setInputContent(e.target.value)}
                    />
                )
            default:
                return null
        }
    }

    return (
        <Card className="max-w-4xl mx-auto  dark:bg-gray-900 shadow-lg">
            <CardContent className="p-6 space-y-6">
                <div className="flex flex-wrap gap-4">
                    {Object.entries(InputTypes).map(([key, value]) => (
                        <TooltipProvider key={value}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={selectedType === value ? "default" : "outline"}
                                        className={`flex-1 sm:flex-none transition-all ${selectedType === value
                                                ? "bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-300 dark:to-pink-300 text-white"
                                                : "hover:bg-gradient-to-r hover:from-indigo-400 hover:to-pink-400 dark:hover:from-indigo-300 dark:hover:to-pink-300 hover:text-white"
                                            }`}
                                        onClick={() => setSelectedType(value)}
                                    >
                                        {value === InputTypes.TEXT && <FileText className="w-4 h-4 mr-2" />}
                                        {value === InputTypes.PDF && <Upload className="w-4 h-4 mr-2" />}
                                        {value === InputTypes.LINK && <Link className="w-4 h-4 mr-2" />}
                                        {value === InputTypes.IMAGE && <Image className="w-4 h-4 mr-2" />}
                                        {value === InputTypes.CODE && <Code className="w-4 h-4 mr-2" />}
                                        <span className="hidden sm:inline">{key.charAt(0) + key.slice(1).toLowerCase()}</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>

                <div>{renderInput()}</div>

                {file && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Selected file: {file.name}
                    </p>
                )}

            </CardContent>
        </Card>
    )
}

