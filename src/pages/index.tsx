import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Output from "../components/Output";

import { media } from "../components/GlobalStyle.css";

const Main = styled.main`
	display: flex;
	${media["1050"]`flex-direction: column;`}
	margin: 45px auto 1rem !important;
	${media["600"]`margin: 20px auto 1rem !important`};
	gap: clamp(0.5rem, 2.5vw, 4rem);
	${media["1050"]`gap: 0.75rem`};
`;

const Footer = styled.footer`
	padding: 20px 0 40px 0;
	display: flex;
	align-items: center;
	${media["600"]`
    font-size: 14px;
  `}

	a {
		display: inline-flex;
		align-items: center;
		transition: color 0.3s;

		svg {
			margin-right: 0.5rem;
			transition: fill 0.3s;
			width: 20px;
			height: 20px;
			${media["600"]`
        width: 18px;
        height: 18px;
      `}
		}

		&:hover {
			color: #005bff;

			svg {
				fill: #005bff;
			}
		}
	}
`;

const Separator = styled.div`
	margin: 0 1rem;
	width: 1px;
	height: 16px;
	background-color: rgb(0 0 0 / 50%);
`;

export default function Home() {
	const [selectedAlgo, setSelectedAlgo] = useState(null);
	const [arrivalTime, setArrivalTime] = useState<number[]>([]);
	const [burstTime, setBurstTime] = useState<number[]>([]);
	const [timeQuantum, setTimeQuantum] = useState<number>();
	const [priorities, setPriorities] = useState<number[]>([]);

	return (
		<div>
			<Head>
				<title>SRTF</title>
				<meta property="og:title" content="SRTF" />
			</Head>

			<Main className="container hero-main-container">
				<h1>Shortest remaining time</h1>
			</Main>

			<Main className="container parent-container">
				<Input
					selectedAlgo={selectedAlgo}
					setSelectedAlgo={setSelectedAlgo}
					setArrivalTime={setArrivalTime}
					setBurstTime={setBurstTime}
				/>
				<Output
					selectedAlgo={selectedAlgo}
					arrivalTime={arrivalTime}
					burstTime={burstTime}
					timeQuantum={timeQuantum}
					priorities={priorities}
				/>
			</Main>

			<Footer className="container footer-container">
				<p>Cabe, Mont Gomery</p>
				<Separator />
				<p>Centeno, Cedric Kent</p>
				<Separator />
				<p>Macaganda, Lance Arvin</p>
				<Separator />
				<p>Marzan, Rox</p>
				<Separator />
				<p>Mendoza, Aljon</p>
				<Separator />
				<p>Sembrano, Lorin</p>
			</Footer>
		</div>
	);
}
