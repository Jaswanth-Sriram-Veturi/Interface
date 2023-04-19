import React, { useState } from "react";
import { AddIcon, TrashCanIcon } from "../../assets/icons";
import { defaultInterfaceField } from "../../constants";
import useTraverseTree from "../../hooks/useTraverseTree";
import "./Field.css";

const Field = (props) => {
	const { field, setFields, idRef, fields, children } = props;
	const [showInput, setShowInput] = useState(false);
	const [inputValue, setInputValue] = useState(field.name);
	const { insertNode, updateNode, deleteNode } = useTraverseTree();

	const toggleInput = () => {
		setShowInput(!showInput);
	};

	const handleOnAddNewField = () => {
		const updatedTree = insertNode(fields, field.id, {
			...defaultInterfaceField,
			id: idRef.current++,
		});
		setFields(updatedTree);
	};

	const handleUpdateField = (value) => {
		const updatedTree = updateNode(fields, field.id, value);
		setFields(updatedTree);
	};

	const handleOnDeleteField = () => {
		const updatedTree = deleteNode(fields, field.id);
		setFields(updatedTree);
	};

	return (
		<>
			<div className="field">
				<div className="field__name-type">
					{showInput ? (
						<input
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onBlur={() => {
								setInputValue(field.name);
								toggleInput();
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleUpdateField({
										name: e.target.value,
									});
									toggleInput();
								}
							}}
							className="field__name-input"
						/>
					) : (
						<p className="field__name" onClick={toggleInput}>
							{field.name}
						</p>
					)}

					<select
						value={field.type}
						className="field__type"
						onChange={(e) =>
							handleUpdateField({
								type: e.target.value,
								nestedFields: [],
							})
						}
					>
						<option value="string">string</option>
						<option value="integer">integer</option>
						<option value="object">object</option>
						<option value="boolean">boolean</option>
					</select>
				</div>
				<div className="field__actions">
					<label
						style={{
							fontSize: "13px",
							fontWeight: 500,
						}}
					>
						Required
					</label>
					<label className="field__actions-switch">
						<input
							className="field__actions-switch__input"
							type="checkbox"
							checked={field.required}
							onChange={(e) =>
								handleUpdateField({
									required: e.target.checked,
								})
							}
						/>
						<span className="field__actions-switch__slider"></span>
					</label>
					{field.type === "object" && (
						<button
							className="interface__header__button"
							onClick={handleOnAddNewField}
						>
							<AddIcon />
						</button>
					)}
					<button
						className="field__actions__delete"
						onClick={handleOnDeleteField}
					>
						<TrashCanIcon />
					</button>
				</div>
			</div>
			{children}
		</>
	);
};

export default Field;
