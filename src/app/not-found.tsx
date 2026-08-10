import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center text-white">
      <div className="max-w-md">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-orange-500">404</p>
        <h1 className="mb-3 text-3xl font-semibold">Resource not found</h1>
        <p className="mb-6 text-gray-400">
          The page you are looking for could not be found.
        </p>
        <Link href="/">
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
