"use client";
import Link from "next/link";
import { Logo, LogoStroke } from "./logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  href?: string;
  target?: string;
  children?: MenuItem[];
  sections?: {
    title: string;
    items: MenuItem[];
  }[];
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    children: [
      { name: "Orbit Insight", href: "/product" },
      { name: "Orbit Trace", href: "/orbit-trace" },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    sections: [
      {
        title: "USE CASES",
        items: [
          { name: "Early Case Assessment", href: "/product2" },
          { name: "Seamless Data Collections", href: "/data-collections" },
          { name: "Proactive Data Monitoring", href: "/data-monitoring" },
        ]
      },
      {
        title: "",
        items: [
            { name: "Organizations", href: "/organizations" },
          { name: "Law Firms", href: "/law-firms" },
          { name: "Education", href: "/education" },
        ]
      }
    ]
  },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Documentation", href: "https://docs.kentron.ai/introduction", target: "_blank" },
      { name: "Integrations", href: "/integrations" },
      { name: "Secure by Design", href: "/secure-by-design" },
      { name: "Regulations", href: "/regulations" },
    ],
  },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo className=" dark:visible " />
                <LogoStroke className="dark:hidden" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 mr-1 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                    {item.children || item.sections ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === item.name && (
                          <div className={cn(
                            "absolute left-0 mt-2 rounded-md bg-background border border-border shadow-lg focus:outline-none z-30 backdrop-blur-lg",
                            item.sections ? "w-[480px]" : "w-auto min-w-[180px]"
                          )}>
                            {item.sections ? (
                              <div className="py-2 flex">
                                {item.sections.map((section, sectionIndex) => (
                                  <div key={sectionIndex} className={cn("px-3 py-2 flex-1", sectionIndex > 0 && "border-l border-border")}>
                                    <h3 className="text-xs font-medium uppercase text-muted-foreground mb-2 px-1">
                                      {section.title}
                                    </h3>
                                    <div className="space-y-1">
                                      {section.items.map((child, childIndex) => (
                                        <Link
                                          key={childIndex}
                                          href={child.href || "#"}
                                          target={child.target}
                                          className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/50 block px-3 py-1.5 text-sm rounded-sm"
                                          onClick={closeDropdowns}
                                        >
                                          {child.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : item.children ? (
                              <div className="py-3 px-3">
                                <div className="space-y-1">
                                  {item.children.map(
                                    (child, childIndex) =>
                                      child.href && (
                                        <Link
                                          key={childIndex}
                                          href={child.href}
                                          target={child.target}
                                          className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/50 block px-3 py-1.5 text-sm rounded-sm transition-colors"
                                          onClick={closeDropdowns}
                                        >
                                          {child.name}
                                        </Link>
                                      )
                                  )}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        )}
                      </>
                    ) : (
                      item.href && (
                        <Link
                          target={item.target}
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      )
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.children || item.sections ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openDropdown === item.name && (
                            <div>
                              {item.sections ? (
                                <div className="pl-4 mt-2 grid grid-cols-2 gap-4">
                                  {item.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex}>
                                      <h3 className="text-xs font-medium uppercase text-muted-foreground mb-2">
                                        {section.title}
                                      </h3>
                                      <ul className="space-y-2">
                                        {section.items.map((child, childIndex) => (
                                          <li key={childIndex}>
                                            <Link
                                              href={child.href || "#"}
                                              target={child.target}
                                              className="text-muted-foreground hover:text-accent-foreground block py-1 text-sm"
                                              onClick={() => {
                                                closeDropdowns();
                                                setMenuState(false);
                                              }}
                                            >
                                              {child.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ) : item.children ? (
                                <div className="pl-4 mt-2">
                                  <ul className="space-y-2">
                                    {item.children?.map((child, childIndex) => (
                                      <li key={childIndex}>
                                        {child.href && (
                                          <Link
                                            href={child.href}
                                            target={child.target}
                                            className="text-muted-foreground hover:text-accent-foreground block py-1.5 text-sm"
                                            onClick={() => {
                                              closeDropdowns();
                                              setMenuState(false);
                                            }}
                                          >
                                            {child.name}
                                          </Link>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : null}
                            </div>
                          )}
                        </div>
                      ) : (
                        item.href && (
                          <Link
                            target={item.target}
                            href={item.href}
                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                            onClick={() => setMenuState(false)}
                          >
                            <span>{item.name}</span>
                          </Link>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                >
                  <Link href="#">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
