import { NextResponse } from "next/server";
import { courseOutline } from "../../../../configs/AIModal";
import { STUDY_MATERIAL_TABLE } from "../../../../configs/schema";
import db from "../../../../configs/db";
import { inngest } from "@/inngest/client";

export async function POST(req) {

    const { studyType, difficulty, topic, courseId, createdBy } = await req.json();

    const PROMPT = 'Generate a study material for' + topic + ' for Exam and level of difficulty will be ' + difficulty + ' with the summary of the courseList of chapters along with sumary for each chapter in JSON format';
    //Generate
    const aiResp = await courseOutline.sendMessage(
        PROMPT
    )
    const aiResult = JSON.parse(aiResp.response.text());
    console.log("Here is the error")

    //Save to DB
    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
          courseId:courseId,
          courseType: studyType,
          topic: topic,
          difficultyLevel: difficulty,
          courseLayout: aiResult,
          createdBy: createdBy,
        
    }).returning({resp:STUDY_MATERIAL_TABLE})

    console.log(dbResult);

    //Trigger the inngest fucntion to generate notes

    const result = await inngest.send({
      name: 'notes.generate',
      data: {
        course: dbResult[0].resp,
      },
    });
    console.log(result);

    return NextResponse.json({result:dbResult[0]})
}