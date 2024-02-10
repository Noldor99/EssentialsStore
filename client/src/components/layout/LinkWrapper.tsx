"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { type ReactNode, useCallback } from "react"

// import { useUserStore } from "@/store"

import { cn } from "@/lib/utils"

type LinkWrapperPropsType = {
  children: ReactNode
  url: string
  onClick?: () => void
}

export const LinkWrapper = ({
  children,
  url,
  onClick,
}: LinkWrapperPropsType) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // const { user } = useUserStore()

  // if (!user && url === "/admin") return null

  const relevantParams = ["view", "tags", "sort"]
  const filteredParams = new URLSearchParams()

  relevantParams.forEach((param) => {
    if (searchParams.has(param)) {
      filteredParams.set(param, searchParams.get(param)!)
    }
  })

  const fullUrl =
    url + (filteredParams.toString() ? `?${filteredParams.toString()}` : "")

  return (
    <Link
      className={cn(
        "text-h2 xl:text-s",
        pathname === url && "font-bold"
        // user &&
        //   url === "/admin" &&
        //   "last:border-transparent xl:last:border-l-2 xl:last:border-black xl:last:pl-8"
      )}
      href={fullUrl}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
