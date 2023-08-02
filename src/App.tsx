import React, {useState} from 'react';
import './App.css';
import {reportFirst, reportSecond} from "./app/common/global-constants";
import ReportTable from "./components/ReportTable/ReportTable";
import {IReportData} from "./types";

const App = () => {
    const [report, setReport] = useState<IReportData>(reportFirst);
    const data = [
        {id: 1, report_name: 'First report', data: reportFirst},
        {id: 2, report_name: 'Second report', data: reportSecond}
    ];

    return (
    <div className="container">
        <form >
            <select onChange={e => setReport(data[+e.target.value].data)}>
                {data.map((report, index) =>
                    <option key={report.id} value={index}>{report.report_name}</option>
                )}
            </select>
        </form>
      <ReportTable report={report}/>
    </div>
)};

export default App;
