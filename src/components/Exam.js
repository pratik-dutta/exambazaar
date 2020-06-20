import React from "react";

function Exam(props){
    console.log("Exam Props", props);
    const {exams, onExamChange} = props;
    return(
        <div>
            <select onClick={onExamChange}>
                {exams.map((ele) => {
                    return <option key={ele._id} value={ele._id}>{ele.name}</option>
                })}
            </select>
        </div>
    );
}

export default Exam;