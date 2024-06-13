import React from 'react'

const IframePowerBi: React.FC<{ source: string }> = ({ source }) => {
    return (
        <section>
            <iframe className="w-full h-[700px] border-[none]" title="perfiles encuesta USAID" src={source} allowFullScreen></iframe>
        </section>
    )
}

export default IframePowerBi
