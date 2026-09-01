import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="page-shell noise flex min-h-screen w-full items-center justify-center bg-[#f7f8f2] pt-[74px]">
      <div className="mx-auto max-w-md px-5 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6d53]/20">
          <AlertCircle className="h-10 w-10 text-[#ff6d53]" />
        </div>
        <h1 className="font-display text-4xl font-extrabold tracking-[-.05em] text-[#182039]">
          404
        </h1>
        <p className="mt-2 text-lg text-[#182039]/60">
          Page not found
        </p>
        <p className="mt-4 text-sm text-[#182039]/50">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <span className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#182039] px-6 py-3 text-sm font-bold text-[#f4f1eb] transition-transform hover:-translate-y-0.5">
            <ArrowLeft size={16} />
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
