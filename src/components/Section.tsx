import React from "react";
interface SectionProps {
    title: string;
    description: string;
}
const Section: React.FC<SectionProps> = ({ title, description }) => {
    return (
        <div className="Section">
            <div className="pb-1">
                <h1>
                    <span className="badge badge-light custom-badge-app">{title}</span>
                </h1>
                <p
                    className="ide-info h5 mt-3"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>
            </div>
        </div>
    );
};

export default Section;
