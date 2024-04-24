import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import styled from "styled-components";

export type AlgoType = "SRTF";
export type OptionType = {
	value: AlgoType;
	label: string;
};

export const defaultOption: OptionType = {
	value: "SRTF",
	label: "Shortest Remaining Time First, SRTF",
};

const options: OptionType[] = [defaultOption];

type AlgoSelectProps = {
	selectedAlgo: OptionType;
	setSelectedAlgo: Dispatch<SetStateAction<OptionType>>;
};

export const StyledSelect = styled(Select)`
	.react-select__control {
		box-sizing: border-box;
		border-color: #c5c7d0;
		height: 41px;

		&:hover {
			background-color: #fafafa;
		}
	}
	.react-select__control--is-focused {
		background-color: #fff;
		box-shadow: 0 0 0px 1px #74b0ff;
		border: 1px solid #2684ff;
		&:hover {
			background-color: #fff;
		}
	}
	.react-select__control--is-disabled {
		background: #fff;
		color: #000;
		border: none;
	}
	.react-select__control--is-disabled .react-select__single-value {
		color: #000;
	}
	.react-select__control--menu-is-open {
		box-shadow: 0 0 5px 1px #74b0ff;
		border: 1px solid #2684ff;
	}
	.react-select__value-container {
		padding: 0 8px;
		font-size: 14px;
	}
	.react-select__option {
		font-size: 14px;
	}
	.react-select__indicators {
		display: none;
	}
`;

const AlgoSelect: React.FC<AlgoSelectProps> = ({
	selectedAlgo,
	setSelectedAlgo,
}) => {
	return (
		<StyledSelect
			defaultValue={defaultOption} // Set defaultValue to defaultOption
			onChange={setSelectedAlgo}
			options={options}
			instanceId="react-select-algo"
			inputId="react-select-algo"
			classNamePrefix="react-select"
			isSearchable={false}
			isDisabled={true}
		/>
	);
};

export default AlgoSelect;
