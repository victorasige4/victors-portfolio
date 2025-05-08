import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VictorsPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#1a2420] text-white flex flex-col">
      {/* Navigation */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl tracking-widest font-light">
            ELEM≡NTIS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/destinations" className="text-white/90 hover:text-white transition-colors">
            Destinations
          </Link>
          <Link href="/wellness" className="text-white/90 hover:text-white transition-colors">
            Wellness
          </Link>
          <Link href="/innovation" className="text-white/90 hover:text-white transition-colors">
            Innovation
          </Link>
          <Link href="/nature" className="text-white/90 hover:text-white border-b border-white pb-1">
            Nature
          </Link>
          <Link href="/community" className="text-white/90 hover:text-white transition-colors">
            Community
          </Link>
          <Link href="/story" className="text-white/90 hover:text-white transition-colors">
            The Story
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex border-white/70 hover:bg-white/10 text-white">
            Join Us <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight">
            <span className="opacity-0">ty • </span>Nature for Sustainability
          </h1>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-white/20">
        <div className="flex items-center mb-4 md:mb-0">
          <button className="text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M12 19V5" />
              <path d="m5 12 7 7 7-7" />
            </svg>
          </button>
          <p className="text-lg md:text-xl font-light ml-4">
            A lifestyle revolution for a<br className="md:hidden" /> sustainable fulfilling future
          </p>
        </div>
        <div>
          <button className="text-white text-lg md:text-xl font-light">Scroll to Explore</button>
        </div>
      </div>
    </div>
  )
}
