"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

export type PageType =
  | { name: "home" }
  | { name: "work" }
  | { name: "process" }
  | { name: "about" }
  | { name: "reviews" }
  | { name: "faq" }
  | { name: "contact" }
  | { name: "service"; slug: string };

type RouterContextValue = {
  page: PageType;
  navigate: (page: PageType) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function parseHash(): PageType {
  if (typeof window === "undefined") return { name: "home" };
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) return { name: "home" };

  const parts = hash.split("/");
  if (parts[0] === "services" && parts[1]) {
    return { name: "service", slug: parts[1] };
  }
  if (
    parts[0] === "work" ||
    parts[0] === "process" ||
    parts[0] === "about" ||
    parts[0] === "reviews" ||
    parts[0] === "faq" ||
    parts[0] === "contact"
  ) {
    return { name: parts[0] } as PageType;
  }
  return { name: "home" };
}

function toHash(page: PageType): string {
  switch (page.name) {
    case "home":
      return "#/";
    case "service":
      return `#/services/${page.slug}`;
    default:
      return `#/${page.name}`;
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  // Initialize from hash on mount (lazy initializer avoids setState-in-effect)
  const [page, setPage] = useState<PageType>(() => {
    if (typeof window === "undefined") return { name: "home" };
    return parseHash();
  });

  // Listen to hashchange (back/forward buttons)
  useEffect(() => {
    const onHashChange = () => setPage(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((next: PageType) => {
    const hash = toHash(next);
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    setPage(next);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useRouter must be used within RouterProvider");
  }
  return ctx;
}

// Helper hook for anchor-like navigation
export function useNav() {
  const { navigate } = useRouter();
  return navigate;
}
