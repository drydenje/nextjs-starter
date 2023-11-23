"use client"
import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/base/components/ui/navigation-menu"

const todo: { title: string; href: string; description: string}[] = [
  {
    title: "Set the fonts",
    href: "/todo#fonts",
    description: "Download and set fonts for headings and body of text",
  },
  {
    title: "Set the fonts",
    href: "/todo#fonts",
    description: "Download and set fonts for headings and body of text",
  },
  {
    title: "Set the fonts",
    href: "/todo#fonts",
    description: "Download and set fonts for headings and body of text",
  },
  {
    title: "Set the fonts",
    href: "/todo#fonts",
    description: "Download and set fonts for headings and body of text",
  },
]

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {todo.map((item)=>(
                <li
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  >
                    {item.description}
                </li>
              ))}

                {/* <NavigationMenuLink asChild>Link</NavigationMenuLink> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
