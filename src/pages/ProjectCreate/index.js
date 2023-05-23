import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import EmployeeModal from "../../components/EmployeeModal";

import "./projectCreate.css";
import { useNavigate } from "react-router";

export default function ProjectCreatePage() {
    const [isAdmin, setIsAdmin] = useState(null);

    const role = isAdmin ? "경영인" : "직원";

    const [modalOpen, setModalOpen] = useState(false);

    const cols = ["발주처명", "프로젝트명", "시작일자", "종료일자", "상태"];

    const [name, setName] = useState("");
    const [projectNo, setProjectNo] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [client, setClient] = useState("");
    const [budget, setBudget] = useState("");

    const navigate = useNavigate();

    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <Header role={role} isAdmin={isAdmin}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar
                    className="col-span-1"
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                ></Sidebar>
                <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border-2 border-slate-200 px-5 mb-20">
                        <div className="flex justify-between pt-10 pb-3">
                            <div className="text-2xl font-medium text-start">
                                프로젝트 생성
                            </div>
                            <button
                                type="submit"
                                className="w-30 h-10 mr-16 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => {
                                    if (
                                        window.confirm(
                                            "프로젝트를 생성하시겠습니까?"
                                        )
                                    ) {
                                        alert("생성되었습니다!");
                                        navigate("/manager");
                                    }
                                }}
                            >
                                생성하기
                            </button>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="grid grid-cols-2 gap-2 pt-3 px-0">
                                <div className="px-2 py-3">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-10">
                                        프로젝트명
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autocomplete="given-name"
                                        className="w-3/5 rounded-md border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    ></input>{" "}
                                </div>

                                <div className="px-2 py-3">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-12">
                                        프로젝트 번호
                                    </label>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autocomplete="given-phone-number"
                                        className="w-3/5 pl-1 rounded-md border-1 border-zinc-300 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        onChange={(e) =>
                                            setProjectNo(e.target.value)
                                        }
                                    ></input>{" "}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-2.5">
                                        프로젝트 설명
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autocomplete="given-email"
                                        className="w-5/6 rounded-md ml-3 border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        onChange={(e) =>
                                            setClient(e.target.value)
                                        }
                                    ></input>{" "}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-10">
                                        발주처명
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autocomplete="given-email"
                                        className="w-5/6 rounded-md ml-3.5 border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        onChange={(e) =>
                                            setClient(e.target.value)
                                        }
                                    ></input>{" "}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 pt-3 px-0 mb-2">
                                <div className="px-2 py-2">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-20">
                                        예산
                                    </label>
                                    <input
                                        type="text"
                                        name="skill"
                                        id="skill"
                                        autocomplete="given-skill"
                                        className="w-5/6 ml-4.5 rounded-md border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        onChange={(e) =>
                                            setBudget(e.target.value)
                                        }
                                    ></input>{" "}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                <div className="px-2 py-2">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-16">
                                        프로젝트 투입직원
                                    </label>
                                    <button
                                        className="button rounded-md border border-gray-300 p-2"
                                        onClick={handleClick}
                                    >
                                        직원 투입
                                    </button>
                                </div>

                                <div className="show-table px-1.5 py-2 ml-1 h-20 rounded-md border-0.5 border-gray-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <EmployeeModal setModalOpen={setModalOpen} cols={cols} />
            )}
        </div>
    );
}
