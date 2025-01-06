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
      url: "/upload",
      icon: File,
      items: [
        {
          title: "File Upload",
          url: "/upload#file-upload",
        },
        {
          title: "Uploaded Files",
          url: "/upload#uploaded-files",
        },
        {
          title: "Guidelines",
          url: "/upload#guidelines",
        },
      ],
    },
    {
      title: "Generate DPP ",
      url: "/generate-dpp",
      icon: Settings2Icon,
      items: [
        {
          title: "Content Selection",
          url: "/generate-dpp#content-selection",
        },
        {
          title: "Customization Options",
          url: "/generate-dpp#customization",
        },
        {
          title: "Preview Panel",
          url: "/generate-dpp#preview",
        },
      ],
    },
    {
      title: "Practice ",
      url: "/practice",
      icon: Target,
      items: [
        {
          title: "Practice Interface",
          url: "/practice#interface",
        },
        {
          title: "Navigation Panel",
          url: "/practice#navigation",
        },
        {
          title: "Review Mode",
          url: "/practice#review",
        },
      ],
    },
    {
      title: "Insights ",
      url: "/insights",
      icon: BarChart,
      items: [
        {
          title: "Performance Charts",
          url: "/insights#charts",
        },
        {
          title: "Progress Summary",
          url: "/insights#summary",
        },
        {
          title: "Recommendations",
          url: "/insights#recommendations",
        },
      ],
    },
    {
      title: "Saved DPPs ",
      url: "/saved-dpps",
      icon: Bookmark,
      items: [
        {
          title: "List of Saved DPPs",
          url: "/saved-dpps#list",
        },
        {
          title: "Actions",
          url: "/saved-dpps#actions",
        },
      ],
    },
    {
      title: "Settings ",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "Profile Settings",
          url: "/settings#profile",
        },
        {
          title: "Preferences",
          url: "/settings#preferences",
        },
        {
          title: "Subscription",
          url: "/settings#subscription",
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
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>)
  );
}
