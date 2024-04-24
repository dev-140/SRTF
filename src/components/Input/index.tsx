import React, {
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
} from "react";
import styled from "styled-components";
import AlgoSelect, { OptionType, defaultOption } from "./AlgoSelect";
import Button from "./Button";
import { invalidInputSwal } from "./swal";

import { media } from "../GlobalStyle.css";

const StyledInput = styled.div`
	padding: 1rem 2rem 2rem 2rem;
	${media["600"]`padding: 0.5rem 1.1rem 1.5rem 1.1rem;`}
	background: #ffffff;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
		0px 2px 32px rgba(15, 91, 206, 0.1);
	border-radius: 15px;
	align-self: flex-start;
	${media["1050"]`align-self: normal;max-width: 100%;width: 100%;`}
	min-width: 230px;
	max-width: 335px;
	width: 26.5vw;
`;

const Form = styled.form`
	& > * + * {
		margin-top: 20px;
	}

	fieldset {
		padding: 0;
		margin-left: 0;
		margin-right: 0;
		border: none;
	}

	label {
		display: inline-block;
		font-size: 14px;
		padding-bottom: 8px;
	}

	input {
		width: 100%;
		border: 1px solid #c5c7d0;
		border-radius: 5px;
		padding: 11px 12px;
		transition: all 0.2s ease-out;
		font-size: 14px;

		&:hover {
			background-color: #fafafa;
			border-color: rgb(179, 179, 179);
		}

		&:focus {
			border-color: #2684ff;
			background-color: #fff;
			outline: none;
		}

		&:-webkit-autofill::first-line {
			font-family: $body-font;
			font-size: 14px;
		}
	}

	button {
		background-color: #2684ff;
		border-radius: 5px;
		color: #fff;
		width: 5.625rem;
		height: 2.5rem;
		transition: background-color 0.2s ease-out;

		position: relative;
		overflow: hidden;

		&:hover {
			background-color: #005bff;
		}
	}

	span.ripple {
		position: absolute;
		border-radius: 50%;
		transform: scale(0);
		animation: ripple 600ms ease-out;
		background-color: rgba(255, 255, 255, 0.7);
	}

	@keyframes ripple {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
`;

type InputProps = {
	selectedAlgo: OptionType;
	setSelectedAlgo: Dispatch<SetStateAction<{}>>;
	setArrivalTime: Dispatch<SetStateAction<number[]>>;
	setBurstTime: Dispatch<SetStateAction<number[]>>;
};

const Input = (props: InputProps) => {
	const [arrivalTime, setArrivalTime] = useState("");
	const [burstTime, setBurstTime] = useState("");
	const arrivalTimeRef = useRef<HTMLInputElement | null>(null);
	const burstTimeRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (arrivalTimeRef.current && burstTimeRef.current) {
			arrivalTimeRef.current.value = "";
			burstTimeRef.current.value = "";
		}
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const arrivalTimeArr = arrivalTime
			.trim()
			.split(/\s+/)
			.map((at) => parseInt(at));
		const burstTimeArr = burstTime
			.trim()
			.split(/\s+/)
			.map((bt) => parseInt(bt));

		if (arrivalTimeArr.length !== burstTimeArr.length) {
			invalidInputSwal(
				"Number of the arrival times and burst times do not match"
			);
			return;
		} else if (
			arrivalTimeArr.some((t) => t < 0) ||
			burstTimeArr.some((t) => t <= 0)
		) {
			invalidInputSwal(
				"Invalid input: Arrival times should be >= 0 and burst times should be > 0"
			);
			return;
		}

		props.setSelectedAlgo(defaultOption);
		props.setArrivalTime(arrivalTimeArr);
		props.setBurstTime(burstTimeArr);
	};

	const handleArrivalTimeChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setArrivalTime(e.target.value);
	};

	const handleBurstTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBurstTime(e.target.value);
	};

	return (
		<StyledInput className="input-main-container">
			<h1>Input Values</h1>
			<Form onSubmit={handleSubmit}>
				<div className="form-container">
					<fieldset>
						<label htmlFor="arrival-time">
							Input arrival Times
						</label>
						<input
							onChange={handleArrivalTimeChange}
							type="text"
							id="arrival-time"
							placeholder="e.g. 0 2 4 6 8"
							ref={arrivalTimeRef}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="burst-time">Input burst Times</label>
						<input
							onChange={handleBurstTimeChange}
							type="text"
							id="burst-time"
							placeholder="e.g. 2 4 6 8 10"
							ref={burstTimeRef}
						/>
					</fieldset>
					<Button>Solve</Button>
				</div>
			</Form>
		</StyledInput>
	);
};

export default Input;
