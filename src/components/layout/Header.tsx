import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/dan-quiz">Dan&apos;s quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
