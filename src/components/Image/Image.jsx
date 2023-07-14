function Image({
    companyLogo, 
    companyName,
    companySite}) {

    return(
        <>
            <a src={companySite}>
                <img src={companyLogo} 
                    alt={companyName} />

            </a>
        </>
    )
}

export {Image}