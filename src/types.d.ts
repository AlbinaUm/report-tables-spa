export interface IReportData {
    header: IReportHeader[],
    data: IReportBody[];
}

interface IReportHeader {
    id: string;
    type: string;
    caption: string;
    align?: "left" | "right" | "center";
}

type IReportBody = (string | number | boolean |  {d: string | number, color: string | number})[];
