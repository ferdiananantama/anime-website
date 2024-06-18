
export default function Pagination({page, lastPage, setPage}){

    const scrollUp = () => {
        scrollTo({
            behavior : "smooth",
            top : 0,
        })
    }

    const handleNextPage = () => {
        setPage((prev) => prev + 1)
        scrollUp()
    }

    const handlePrevPage = () => {
        setPage((prev) => prev - 1)
        scrollUp()
    }

    return(
        <>
            <div className="flex justify-center items-center gap-4 py-8">
                {
                    page <= 1 ? null : 
                    <button onClick={handlePrevPage} className="text-lg text-primary hover:text-accent">Prev</button>
                }
                <div className="text-accent">{page} of {lastPage}</div>
                {
                    page >= lastPage ? null :
                    <button onClick={handleNextPage} className="text-lg text-primary hover:text-accent">Next</button>
                }
            </div>
        </>
    )
}