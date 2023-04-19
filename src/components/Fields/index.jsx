import React from "react";
import Field from "../Field";
import "./Fields.css";

const Fields = (props) => {
	const { field, setFields, idRef, fields } = props;

	return (
		<>
			<Field
				field={field}
				setFields={setFields}
				idRef={idRef}
				fields={fields}
			>
				{field.type === "object" && field.nestedFields.length > 0 && (
					<div className="fields-wrapper">
						{field.nestedFields.map((nestedField) => (
							<div
								style={{ paddingLeft: "20px" }}
								key={nestedField.id}
								className={
									field.nestedFields.length !== 1
										? "field-wrapper"
										: ""
								}
							>
								<Fields
									field={nestedField}
									setFields={setFields}
									idRef={idRef}
									fields={fields}
								/>
							</div>
						))}
					</div>
				)}
			</Field>
		</>
	);
};

export default Fields;
