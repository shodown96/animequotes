
function Container({ children, className }: any) {
    return (
        <div className={`px-10 lg:px-24 py-10 lg:py-24 ${className ?? ''}`}>{children}</div>
    )
}

export default Container