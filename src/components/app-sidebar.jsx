"use client"

import * as React from "react"
import {
  BarChart,
  Book,
  BookA,
  Bookmark,
  BookOpen,
  Bot,
  Command,
  File,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  Settings2,
  Settings2Icon,
  SquareTerminal,
  Target,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"
import SnowEffect from "./SnowEffect"
import Image from "next/image"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Generate ",
      url: "/create",
      icon: Settings2Icon,
      isActive: true
    },
    ,
    {
      title: "Dashboard ",
      url: "/dashboard",
      icon: BookA,
      isActive: true
    },
    {
      title: "Practice ",
      url: "https://sensational-empanada-52c7a0.netlify.app/",
      icon: Target,

    },
    
    {
      title: "Insights ",
      url: "https://lively-creponne-4c0600.netlify.app/",
      icon: BarChart,
    },
    {
      title: "Chat Bot ",
      url: 'https://app.droxy.ai/agent/6780a5cc87b7a00b52e19062',
      icon: Bookmark,
      
    },
    
    
  ]
}

export function AppSidebar({
  ...props
}) {
  return (
    
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              
              <Link href="/">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                  <Image src="/assets/feature.png" height={50 } width={50 } alt="image" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Prep Pandit</span>
                  <span className="truncate text-xs">DPP</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SnowEffect />
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>)
  );
}
