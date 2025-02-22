import NavLink from "@/components/NavLink";

async function CategoryList() {
  // await new Promise((res) => setTimeout(() => res(), 1000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 gap-2">
      <li className="text-center lg:text-right">
        <NavLink path="/blogs">همه</NavLink>
      </li>
      {categories.map((category) => (
        <li key={category._id} className="text-center lg:text-right">
          <NavLink path={`/blogs/category/${category.slug}`}>
            {category.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
