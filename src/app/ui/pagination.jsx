"use client";

import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className={"page-item " + (currentPage <= 1 ? "disabled" : "")}>
          <a className="page-link" href={createPageURL(currentPage - 1)}>
            Previous
          </a>
        </li>
        {[...Array(totalPages).keys()].map((e) => (
          <li key={e + "page"} className="page-item">
            <a
              className={"page-link " + (e + 1 === currentPage ? "active" : "")}
              href={createPageURL(e + 1)}
            >
              {e + 1}
            </a>
          </li>
        ))}
        <li
          className={
            "page-item " + (currentPage >= totalPages ? "disabled" : "")
          }
        >
          <a className="page-link" href={createPageURL(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
