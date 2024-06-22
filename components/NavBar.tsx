"use client";
import React from "react";
import { IconBed, IconBrandGithub, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Button } from "./ui/button";
import Link from "next/link";
export function NavBar() {
  const navItems = [
    {
      name: "GitHub",
      link: "https://github.com/mimasala/portfoliov2",
      icon: <IconBrandGithub />
    },
    {
      name: "GitHub",
      link: "/about",
      icon: <IconBed />
    },
    {
      name: "GitHub",
      link: "/",
      icon: <IconHome />
    },
  ];
  return (
    <>
      <div className="flex z-50 fixed right-2 top-2">
        {
          navItems.map((item, key) => {
            return (
              <Button asChild key={key} className="mx-1" variant="ghost">
                <Link href={item.link}>
                  {item.icon}
                </Link>
              </Button>
            )
          })
        }
      </div>
    </>
  );
}
