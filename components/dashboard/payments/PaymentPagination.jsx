export default function PaymentPagination({
  page,
  pagination,
  onPageChange
}) {
  const totalPages = Math.max(
    Number(
      pagination?.totalPages ||
      pagination?.pages ||
      1
    ),
    1
  );

  const currentPage = Number(
    pagination?.page || page || 1
  );

  const hasPreviousPage =
    pagination?.hasPreviousPage ??
    pagination?.hasPrev ??
    currentPage > 1;

  const hasNextPage =
    pagination?.hasNextPage ??
    pagination?.hasNext ??
    currentPage < totalPages;

  return (
    <section className="admin-payment-section admin-payment-pagination-section">
      <div className="admin-payment-pagination">
        <button
          type="button"
          disabled={!hasPreviousPage}
          onClick={() =>
            onPageChange(Math.max(currentPage - 1, 1))
          }
        >
          ← Previous
        </button>

        <div className="admin-payment-page-info">
          <span>Page</span>
          <strong>{currentPage}</strong>
          <span>of</span>
          <strong>{totalPages}</strong>
        </div>

        <button
          type="button"
          disabled={!hasNextPage}
          onClick={() =>
            onPageChange(
              Math.min(currentPage + 1, totalPages)
            )
          }
        >
          Next →
        </button>
      </div>
    </section>
  );
}