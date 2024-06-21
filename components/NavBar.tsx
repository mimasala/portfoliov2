"use client";
import React from "react";
import { IconBrandGithub, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Button } from "./ui/button";
export function NavBar() {
  const navItems = [
    {
      name: "GitHub",
      link: "https://github.com/mimasala/portfoliov2",
      icon: <IconBrandGithub />
    },
  ];
  return (
    <>
      <div className="flex z-50 fixed right-2 top-2">
        {
          navItems.map((item, key) => {
            return <Button key={key} className="mx-1" variant="ghost">{item.icon}</Button>
          })
        }
      </div>
    </>
  );
}
