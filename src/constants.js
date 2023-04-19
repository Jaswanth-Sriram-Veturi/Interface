export const defaultInterfaceFields = [
	{
		id: 1,
		name: "person",
		type: "object",
		required: false,
		nestedFields: [
			{
				id: 2,
				name: "name",
				type: "object",
				required: false,
				nestedFields: [
					{
						id: 3,
						name: "firstName",
						type: "string",
						required: false,
						nestedFields: [],
					},
					{
						id: 4,
						name: "lastName",
						type: "string",
						required: false,
						nestedFields: [],
					},
				],
			},
			{
				id: 5,
				name: "age",
				type: "integer",
				required: false,
				nestedFields: [],
			},
		],
	},
	{
		id: 6,
		name: "order",
		type: "string",
		required: false,
		nestedFields: [],
	},
	{
		id: 7,
		name: "class",
		type: "boolean",
		required: false,
		nestedFields: [],
	},
];

export const defaultInterfaceField = {
	name: "addName",
	type: "string",
	required: false,
	nestedFields: [],
};
