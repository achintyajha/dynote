import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

    let left = (
      <div className="space-x-2">
        <Link href="/">
          <a data-active={isActive("/")}>
            Notes
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive("/drafts")}>Drafts</a>
        </Link>
      </div>
    );
    let right = (
      <div className="space-x-2">
        <Link href="/create">
          <button>
            <a>New post</a>
          </button>
        </Link>     
      </div>
    );
  

  return (
    <nav className="flex justify-between p-2">
      {left}
      {right}
    </nav>
  );
};

export default Header;