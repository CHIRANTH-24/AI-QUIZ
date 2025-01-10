// import { AppSidebar } from "@/components/app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"

// export default function Page() {
//   return (
//     (<SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2">
//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />

//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//           </div>
//           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//         </div>
//       </SidebarInset>
//     </SidebarProvider>)
//   );
// }
"use client";
import CourseList from '@/components/CourseList';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/type-writereffect';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

const words = [
  {
    text: "Work Smart, Not Hard",
  },

];

const page = () => {
  const { user } = useUser();
  return (
    <>
      <div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-300 dark:to-pink-300 text-transparent bg-clip-text">{user?.firstName} </h1>
          <h6 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-300 dark:to-pink-300 text-transparent bg-clip-text"><TypewriterEffectSmooth words={words} /></h6>   
      <div>
        <CourseList />
      </div>
      </div>
    </>
  )
}

export default page
