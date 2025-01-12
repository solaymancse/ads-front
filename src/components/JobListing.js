import Button from "@/components/Button";

/*
When this gets changed to use a 3rd party application:
title = "View Job"
newTab = {true}
*/
export default function JobListing({ role, jobLink }) {
    return (
        <div className="flex justify-between items-center w-full h-[100px] outline">
            <div className="pl-5">
                <h5>{role}</h5>
            </div>
            <div className="pr-5">
                <Button title="Contact Us" routeTo={jobLink} newTab={false}/>
            </div>
        </div>
    );
};