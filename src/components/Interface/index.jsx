import React, { useRef } from "react";
import Fields from "../Fields";
import { AddIcon } from "../../assets/icons";
import { defaultInterfaceField, defaultInterfaceFields } from "../../constants";
import "./Interface.css";

const Interface = () => {
	const idRef = useRef(8);
	const [fields, setFields] = React.useState(defaultInterfaceFields);

	const handleOnAddField = () => {
		setFields((prev) => [
			...prev,
			{
				...defaultInterfaceField,
				id: idRef.current++,
			},
		]);
	};

	return (
		<div className="interface-container">
			<div className="interface">
				<div className="interface__header">
					<p className="interface__header__title">
						Field name and type
					</p>
					<button
						className="interface__header__button"
						onClick={handleOnAddField}
					>
						<AddIcon />
					</button>
				</div>
				<div className="interface__body">
					{fields.map((field, index) => (
						<div className="interface__body__fields" key={field.id}>
							<p className="interface__body__fields__index">
								{index + 1}.
							</p>
							<div className="interface__body__fields__wrapper">
								<Fields
									field={field}
									setFields={setFields}
									idRef={idRef}
									fields={fields}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Interface;
