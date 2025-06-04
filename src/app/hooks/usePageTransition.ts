"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function usePageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const navigateWithTransition = useCallback(
    (href: string) => {
      if (pathname === href) return;

      // Dispatch custom event to trigger transition
      window.dispatchEvent(new CustomEvent("transitionStart"));

      const loader = document.querySelector(".page-transition-loader");
      if (loader) {
        loader.classList.add("loader--active");
      }

      setTimeout(() => {
        router.push(href);
        // Dispatch event when route change is complete
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("routeChangeComplete"));
        }, 100);
      }, 1000);
    },
    [router, pathname]
  );

  return { navigateWithTransition };
}
