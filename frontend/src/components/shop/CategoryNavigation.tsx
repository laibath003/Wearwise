
type CategoryNavigationProps = {
  categories: readonly string[]
}

export default function CategoryNavigation({
  categories,
}: CategoryNavigationProps) {
  return (
    <nav className="mb-8 flex flex-wrap gap-x-7 gap-y-3 border-b border-gray-200 pb-5">
      <a
        href="#all-products"
        className="text-sm font-semibold transition-colors hover:text-[#E63946]"
      >
        All Products
      </a>

      {categories.map((category) => (
        <a
          key={category}
          href={`#${category.toLowerCase()}`}
          className="text-sm text-gray-500 transition-colors hover:text-[#E63946]"
        >
          {category}
        </a>
      ))}
    </nav>
  )
}
