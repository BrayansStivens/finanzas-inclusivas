import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ResultSectionBi: React.FC = () => {
    const powerBiSource = "https://app.powerbi.com/view?r=eyJrIjoiNDc3MGY0NDAtZjM2MS00M2M0LWIxNzQtMzFjMDk0YTIyZDYzIiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection3061a85774e8c0cd28e9";
    return (
        <section className="p-[10px]">
            <section>
                <PageTitle title="Perfilamiento de mujeres" />

                <div className="text-left mt-0 mx-[10px] mt-[10px] mb-[0] gap-x-[25px] not-italic font-normal leading-[26px] text-justify">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at.
                    </p>
                </div>

            </section>

            <h2 className='bg-[#2A63B1] p-[4px] mt-[0] mb-[30px] mt-[30px] text-2xl text-center text-[white] font-bold flex'>
                <svg className="ms-auto mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.5313 19.6875C29.5313 20.0605 29.3831 20.4181 29.1194 20.6819C28.8557 20.9456 28.498 21.0938 28.125 21.0938H11.25C10.877 21.0938 10.5194 20.9456 10.2556 20.6819C9.99192 20.4181 9.84376 20.0605 9.84376 19.6875C9.84376 19.3145 9.99192 18.9569 10.2556 18.6931C10.5194 18.4294 10.877 18.2812 11.25 18.2812H28.125C28.498 18.2812 28.8557 18.4294 29.1194 18.6931C29.3831 18.9569 29.5313 19.3145 29.5313 19.6875ZM39.375 19.6875C39.375 23.5813 38.2204 27.3877 36.0571 30.6253C33.8938 33.8629 30.819 36.3863 27.2216 37.8764C23.6242 39.3665 19.6657 39.7564 15.8467 38.9967C12.0277 38.2371 8.51969 36.362 5.76634 33.6087C3.013 30.8553 1.13795 27.3473 0.378299 23.5283C-0.381348 19.7093 0.00853026 15.7508 1.49863 12.1534C2.98873 8.556 5.51213 5.48123 8.74972 3.31794C11.9873 1.15465 15.7937 0 19.6875 0C24.909 0 29.9165 2.07421 33.6087 5.76634C37.3008 9.45846 39.375 14.4661 39.375 19.6875ZM36.5625 19.6875C36.5625 16.3499 35.5728 13.0873 33.7186 10.3123C31.8643 7.53717 29.2288 5.37426 26.1453 4.09703C23.0618 2.8198 19.6688 2.48562 16.3954 3.13675C13.1219 3.78787 10.1151 5.39506 7.75508 7.75507C5.39507 10.1151 3.78788 13.1219 3.13676 16.3954C2.48563 19.6688 2.81981 23.0618 4.09704 26.1453C5.37427 29.2288 7.53718 31.8643 10.3123 33.7185C13.0873 35.5728 16.3499 36.5625 19.6875 36.5625C24.163 36.5625 28.4553 34.7846 31.6199 31.6199C34.7846 28.4552 36.5625 24.163 36.5625 19.6875Z" fill="white" />
                </svg>
            </h2>

            <IframePowerBi source={powerBiSource} />

        </section>
    );
}



export default ResultSectionBi;