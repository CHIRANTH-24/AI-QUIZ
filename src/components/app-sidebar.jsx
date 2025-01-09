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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain : [
    {
      title: "Dashboard ",
      url: "/dashboard",
      icon: BookA,
      isActive: true
    },
    {
      title: "Upload Material ",
      url: "/dashboard/upload",
      icon: File,
      
    },
    {
      title: "Generate DPP ",
      url: "/create",
      icon: Settings2Icon,
    },
    {
      title: "Practice ",
      url: "/dashboard/practice",
      icon: Target,
     
    },
    {
      title: "Insights ",
      url: "/dashboard/insights",
      icon: BarChart,
      items: [
        {
          title: "Performance Charts",
          url: "/dashboard/insights#charts",
        },
        {
          title: "Progress Summary",
          url: "/dashboard/insights#summary",
        },
        {
          title: "Recommendations",
          url: "/dashboard/insights#recommendations",
        },
      ],
    },
    {
      title: "Saved DPPs ",
      url: "/dashboard/saved-dpps",
      icon: Bookmark,
      items: [
        {
          title: "List of Saved DPPs",
          url: "/dashboard/saved-dpps#list",
        },
        {
          title: "Actions",
          url: "/dashboard/saved-dpps#actions",
        },
      ],
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
              
              <a href="#">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Prep Pandit</span>
                  <span className="truncate text-xs">DPP</span>
                </div>
              </a>
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
