import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Upskill Store. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Terms
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
