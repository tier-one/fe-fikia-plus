
import { Pagination } from 'antd';

interface PaginationProps {
  pageSize: number;
  totalItems: number;
  handlePageChange: (page: number) => void;
  currentPage: number
}
const PaginatedData = ({ pageSize, totalItems, handlePageChange, currentPage }: PaginationProps) => {

  return (
    <div>
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        defaultPageSize={10}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePageChange}
        hideOnSinglePage={true}
      />
    </div>
  );
}

export default PaginatedData;