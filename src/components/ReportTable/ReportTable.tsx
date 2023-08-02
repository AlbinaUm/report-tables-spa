import React from 'react';
import {IReportData} from "../../types";
import './ReportTable.css';

interface Props {
    report: IReportData
}

const ReportTable: React.FC<Props> = ({report}) => {
    let columns = report.header;
    let rows = report.data;

    const getAlignPosition = (column: string) => {
        switch (column) {
            case 'string':
                return 'left';
            case 'boolean':
                return 'center';
            case 'float':
            case 'number':
                return 'right'
            default:
                return 'left';
        }
    };

    return (
        <>
            <div className="reportTableWrap">
                <table className="reportTable">
                    <thead>
                        <tr>
                            {columns.map(column => <th key={column.id}>
                                {column.caption}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) =>
                            <tr key={index}>
                                {columns.map((column, i) =>
                                    <td key={column.id} style={{textAlign: column.align ? column.align : getAlignPosition(column.type)}}>
                                        {typeof row[i] === 'object' ?  Object(row[i]).d : row[i] }
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ReportTable;