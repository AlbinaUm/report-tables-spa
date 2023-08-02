import React, {useState} from 'react';
import './App.css';
import {data, reportFirst} from "./app/common/global-constants";
import ReportTable from "./components/ReportTable/ReportTable";
import {IReportData} from "./types";

const App = () => {
    const [report, setReport] = useState<IReportData>(reportFirst);

    return (
    <div className="container">
        <select onChange={e => setReport(data[+e.target.value].data)}>
                {data.map((report, index) =>
                    <option key={report.id} value={index}>{report.report_name}</option>
                )}
        </select>
      <ReportTable report={report}/>
    </div>
)};

export default App;
