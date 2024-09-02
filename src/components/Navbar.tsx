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

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image
                    src="/hey.jpg"
                    width={100}
                    height={100}
                    className="h-10 w-10 rounded-[12.5px]"
                    alt="moment image"
                  />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <div className="flex items-center">
                  <div className="relative flex items-center justify-center">
                    <Link href="/" className="flex items-center">
                      <button className="flex items-center">hi</button>
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
                      <BsArrowRight className="ml-1.5 -translate-x-1 opacity-75 group-hover:translate-x-2 group-hover:text-[#F3F1EB] transition" />
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
                      <BsArrowRight className="ml-1.5 -translate-x-1 opacity-75 group-hover:translate-x-2 group-hover:text-[#F3F1EB] transition" />
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
