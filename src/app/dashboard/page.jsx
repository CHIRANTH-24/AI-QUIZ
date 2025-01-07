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
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import CourseList from './_components/CourseList';

const page = () => {
  const { user } = useUser();
  return (
    <><div>
      <h1>Hello! {user?.fullName}</h1>
      <h1>{user?.primaryEmailAddress?.emailAddress}</h1>
      <Link href="/create">
        <Button>Create New Lesson</Button>
      </Link>

      <div>
        <CourseList />
      </div>
    </div></>
  )
}

export default page
