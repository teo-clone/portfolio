import * as React from "react"
import { useEffect } from "react";

const Footer = () => {
    const [lastUpdated, setLastUpdated] = React.useState<string | null>(null);

// React.useEffect(() => {
//     const git = simpleGit();

//     git.log()
//         .then(({ latest }: LogResult) => {
//             if (latest) {
//                 const lastUpdatedText = new Date(latest.date).toDateString()
//                 setLastUpdated(lastUpdatedText);
//             };
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// }, []);

    return <div className="flex flex-col justify-center grow justify-center items-center pb-[40px] gap-[20px] text-sm">
        <div className={"flex md:flex-row flex-col gap-[20px]"}>
        <div>
            theodore.tsivranidis@gmail.com
        </div>

        <div>
            +1 (857) 334-0332
        </div>
    </div>

        <div>
            Built from scratch using Gatsby React.js and Tailwindcss. Hosted on Netlify.
        </div>

        <div>
            Last updated: 05/11/2023 07:59 PM{lastUpdated}
        </div>
    </div>
}

export default Footer
