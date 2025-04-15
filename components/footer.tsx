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

type NavigationItem = {
  name: string;
  href: string;
  target?: string;
};

type LinkGroup = {
  group: string;
  items: NavItem[];
};

const Footer: React.FC = () => {
  const pathname = usePathname();

  // Navigation data based on header menu items
  const navigation: {
    main: NavigationItem[];
    product: NavigationItem[];
    solutions: NavigationItem[];
    resources: NavigationItem[];
    legal: NavigationItem[];
  } = {
    main: [
      { name: 'Home', href: '/' },
    ],
    product: [
      { name: "Orbit Insight", href: "/product" },
      { name: "Orbit Trace", href: "/orbit-trace" },
    ],
    solutions: [
      // Use Cases
      { name: "Early Case Assessment", href: "/product2" },
      { name: "Seamless Data Collections", href: "/data-collections" },
      { name: "Proactive Data Monitoring", href: "/data-monitoring" },
      // Organizations
      { name: "Organizations", href: "/organizations" },
      { name: "Law Firms", href: "/law-firms" },
      { name: "Education", href: "/education" },
    ],
    resources: [
      { name: "Documentation", href: "https://docs.kentron.ai/introduction", target: "_blank" },
      { name: "Integrations", href: "/integrations" },
      { name: "Secure by Design", href: "/secure-by-design" },
      { name: "Regulations", href: "/regulations" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  // Convert navigation to the format needed for the original UI
  const links: LinkGroup[] = [
    {
      group: 'Products',
      items: navigation.product.map(item => ({ 
        title: item.name, 
        href: item.href,
        ...(item.target && { target: item.target })
      })),
    },
    {
      group: 'Solutions',
      items: navigation.solutions.map(item => ({ 
        title: item.name, 
        href: item.href,
        ...(item.target && { target: item.target })
      })),
    },
    {
      group: 'Resources',
      items: navigation.resources.map(item => ({ 
        title: item.name, 
        href: item.href,
        ...(item.target && { target: item.target })
      })),
    },
    {
      group: 'Legal',
      items: navigation.legal.map(item => ({ 
        title: item.name, 
        href: item.href 
      })),
    },
  ];

  return (
    <footer className="border-t border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white pt-16 ">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="block font-medium text-lg mb-4">Products</div>
            {navigation.product.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                target={item.target}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block mb-3 duration-150"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="block font-medium text-lg mb-4">Solutions</div>
            
            {/* USE CASES */}
            <div className="mb-4">
              <div className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-3">USE CASES</div>
              {navigation.solutions.slice(0, 3).map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  target={item.target}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block mb-3 duration-150"
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Organizations */}
            <div>
              {navigation.solutions.slice(3).map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  target={item.target}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block mb-3 duration-150"
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="block font-medium text-lg mb-4">Resources</div>
            {navigation.resources.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                target={item.target}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block mb-3 duration-150"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="block font-medium text-lg mb-4">Legal</div>
            {navigation.legal.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                target={item.target}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block mb-3 duration-150"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-gray-200 dark:border-gray-800 py-6">
          <span className="text-gray-500 dark:text-gray-400 order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Kentron, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link 
              href="https://www.linkedin.com/company/kentronai" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block"
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
