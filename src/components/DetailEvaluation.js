import React from "react";

export default function DetailEvaluation({
    evals,
    evalType,
    setEvalType,
    employee,
    setEmployee,
    employeeInfo,
}) {
    return (
        <div className="flex">
            <select
                onChange={(e) => setEvalType(e.target.value)}
                value={evalType}
                id="evaluationType"
                name="evaluationType"
                className="w-max ml-2 px-2 block rounded-md border-1.5 border-zinc-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                {evals.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <select
                onChange={(e) => setEmployee(e.target.value)}
                value={employee}
                id="employee"
                name="employee"
                className="w-max ml-2 px-2 block rounded-md border-1.5 border-zinc-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                {employeeInfo.map((item, index) => (
                    <option value={item.employeeName} key={index}>
                        {item.employeeNumber} {item.employeeName}
                    </option>
                ))}
            </select>
        </div>
    );
}
