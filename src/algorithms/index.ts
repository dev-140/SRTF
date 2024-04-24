// @ts-ignore
import { fcfs } from "./fcfs";
import { sjf } from "./sjf";
import { srtf } from "./srtf";
import { rr } from "./rr";
import { npp } from "./npp";
import { pp } from "./pp";
import { AlgoType } from "../components/Input/AlgoSelect";

export type ganttChartInfoType = {
	job: string;
	start: number;
	stop: number;
}[];

export type solvedProcessesInfoType = {
	job: string;
	at: number;
	bt: number;
	ft: number;
	tat: number;
	wat: number;
}[];

export const solve = (
	algo: AlgoType,
	arrivalTime: number[],
	burstTime: number[],
	timeQuantum: number,
	priorities: number[]
) => {
	switch (algo) {
		case "SRTF":
			return srtf(arrivalTime, burstTime);
		default:
			break;
	}
};
