// src/app/services/[id]/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
          Service Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The service you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="space-y-4">
          <Link href="/services">
            <Button className="w-full">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Services
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
