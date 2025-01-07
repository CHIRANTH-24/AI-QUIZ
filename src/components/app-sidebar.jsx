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
      isActive: true,
      items: [
        {
          title: "Overview Panel",
          url: "/dashboard#overview",
        },
        {
          title: "Quick Actions",
          url: "/dashboard#quick-actions",
        },
        {
          title: "Recent Activity",
          url: "/dashboard#recent-activity",
        },
      ],
    },
    {
      title: "Upload Material ",
      url: "/dashboard/upload",
      icon: File,
      items: [
        {
          title: "File Upload",
          url: "/dashboard/upload#file-upload",
        },
        {
          title: "Uploaded Files",
          url: "/dashboard/upload#uploaded-files",
        },
        {
          title: "Guidelines",
          url: "/dashboard/upload#guidelines",
        },
      ],
    },
    {
      title: "Generate DPP ",
      url: "/dashboard/generate-dpp",
      icon: Settings2Icon,
      items: [
        {
          title: "Content Selection",
          url: "/dashboard/generate-dpp#content-selection",
        },
        {
          title: "Customization Options",
          url: "/dashboard/generate-dpp#customization",
        },
        {
          title: "Preview Panel",
          url: "/dashboard/generate-dpp#preview",
        },
      ],
    },
    {
      title: "Practice ",
      url: "/dashboard/practice",
      icon: Target,
      items: [
        {
          title: "Practice Interface",
          url: "/dashboard/practice#interface",
        },
        {
          title: "Navigation Panel",
          url: "/dashboard/practice#navigation",
        },
        {
          title: "Review Mode",
          url: "/dashboard/practice#review",
        },
      ],
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
    {
      title: "Settings ",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        {
          title: "Profile Settings",
          url: "/dashboard/settings#profile",
        },
        {
          title: "Preferences",
          url: "/dashboard/settings#preferences",
        },
        {
          title: "Subscription",
          url: "/dashboard/settings#subscription",
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
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>)
  );
}
