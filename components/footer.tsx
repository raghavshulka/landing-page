'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo, LogoStroke } from './logo';

// Define types for our navigation items
type NavItem = {
  title: string;
  href: string;
  target?: string;
};

type LinkGroup = {
  group: string;
  items: NavItem[];
};

const Footer: React.FC = () => {
  const pathname = usePathname();

  // Navigation data
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Orbit Insight', href: '/product' },
      { name: 'ECA', href: '/product2' },
      { name: 'Documentation', target: '_blank', href: 'https://docs.kentron.ai/introduction' },
    ],
    product: [
      { name: "Unified Ingestion Engine", href: "/product/unified-ingestion" },
      { name: "Intelligent Retrieval Engine", href: "/product/intelligence-processing" },
      { name: "Predictive Compliance Engine", href: "/product/predictive-compliance" },
    ],
    solution: [
      { name: "Corporations", href: "#" },
      { name: "Legal Service Provider", href: "#" },
      { name: "Law Firms", href: "#" },
      { name: "Financial Services", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  // Convert navigation to the format needed for the original UI
  const links: LinkGroup[] = [
    {
      group: 'Navigation',
      items: navigation.main.map(item => ({ 
        title: item.name, 
        href: item.href, 
        ...(item.target && { target: item.target }) 
      })),
    },
    {
      group: 'Product',
      items: navigation.product.map(item => ({ title: item.name, href: item.href })),
    },
    {
      group: 'Solution',
      items: navigation.solution.map(item => ({ title: item.name, href: item.href })),
    },
    {
      group: 'Legal',
      items: navigation.legal.map(item => ({ title: item.name, href: item.href })),
    },
  ];

  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo className="dark:block hidden" />
              <LogoStroke className="block dark:hidden" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href} 
                    target={item.target}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Kentron, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link 
              href="https://www.linkedin.com/company/kentronai" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-muted-foreground hover:text-primary block"
            >
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
