import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import { ThemeProvider } from 'next-themes';


export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <div className="bg-neutral-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Content />
      </div>
    </div>
    </ThemeProvider>
  );
}