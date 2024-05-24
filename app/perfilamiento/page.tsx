import React from "react";
import ResultSectionBi from "./components/ProfileSectionBi";
import Breadcrumb from "@/components/ui/Breadcrumb";



const Profile: React.FC = () => {
    return (
        <>
            <Breadcrumb title="Perfilamiento" />
            <main>
                <article id="perfilamiento" className="flex flex-col gap-5">
                    <ResultSectionBi />
                </article>
            </main>
        </>
    );
}



export default Profile;