import { Button } from "."
import { ArrowLeft, ArrowRight } from "../assets/svgs"
import { PaginationProps } from "../interfaces"

function Pagination({ pages, currentPage, total, setPage }: PaginationProps) {


    const handleNext = () => {
        const newPage = Number(currentPage) + 1
        if (newPage <= pages) {
            setPage(newPage)
        }
    }

    const handlePrevious = () => {
        const newPage = Number(currentPage) + 1
        if (newPage <= pages) {
            setPage(newPage)
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center mt-10">
                {/* <!-- Help text --> */}
                <span className="text-sm text-gray-700 ">
                    Showing <span className="font-semibold">{currentPage}</span> of{" "}
                    <span className="font-semibold text-gray-900 ">{pages}</span> Pages,
                    Total: <span className="font-semibold text-gray-900 ">{total}</span>
                </span>
                <div className="flex gap-4 mt-2 xs:mt-0">
                    {/* <!-- Buttons --> */}
                    <Button onClick={handlePrevious}>
                        <ArrowLeft />
                        Prev
                    </Button>
                    <Button onClick={handleNext}>
                        Next
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>


    )
}

export default Pagination