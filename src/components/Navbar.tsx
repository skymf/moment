import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";
import { BsArrowRight } from "react-icons/bs";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="flex flex-row items-center">
                <div className="ml-4 flex lg:ml-0 rounded hover:bg-gray-200 pb-1">
                  <Link href="/" className="font-bold text-2xl uppercase ">
                    moment
                  </Link>
                </div>

                <div className="hidden lg:ml-12 lg:block lg:self-stretch">
                  <div className="flex flex-row gap-8 pt-2 font-semibold text-muted-foreground ">
                    <Link href="/products">
                      <button>the shop</button>
                    </Link>
                    <Link href="/">
                      <button>other</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className="group flex items-center px-3 h-6 sm:h-9 w-auto max-w-xs sm:max-w-max rounded-full border border-[#1D1D1F] font-medium text-sm outline-none focus:scale-110 hover:scale-110 hover:bg-[#1D1D1F] hover:text-[#F3F1EB] active:scale-105 transition"
                    >
                      sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <UserAccountNav user={user} />
                  ) : (
                    <Link
                      href="/sign-up"
                      className="group flex items-center px-3 h-6 sm:h-9 w-auto max-w-xs sm:max-w-max rounded-full border border-[#1D1D1F] font-medium text-sm outline-none focus:scale-110 hover:scale-110 hover:bg-[#1D1D1F] hover:text-[#F3F1EB] active:scale-105 transition"
                    >
                      sign up
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
