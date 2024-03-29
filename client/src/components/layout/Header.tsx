import { LinkWrapper } from "@/components/layout/LinkWrapper"
import { SheetHeader } from "@/components/layout/SheetHeader"

export const Header = () => {
  const nav = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "News", url: "/news" },
    { name: "Admin panel", url: "/admin" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white py-4">
      <div className="container">
        <div className="flex items-center justify-end gap-4 xl:justify-between xl:gap-8">
          <nav className="hidden items-center justify-between  gap-8 xl:flex">
            {nav.map(({ name, url }, idx) => (
              <LinkWrapper url={url} key={idx}>
                {name}
              </LinkWrapper>
            ))}
          </nav>
          <SheetHeader nav={nav} />
        </div>
      </div>
    </header>
  )
}
