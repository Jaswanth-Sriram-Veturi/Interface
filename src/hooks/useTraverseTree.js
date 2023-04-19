const useTraverseTree = () => {
	const insertNode = (tree, id, item) => {
		const traverseNode = (node, id, item) => {
			if (node.id === id) {
				node.nestedFields.push(item);
				return node;
			}
			let updatedNode = [];
			if (node.nestedFields.length !== 0)
				updatedNode = node.nestedFields.map((node) =>
					traverseNode(node, id, item)
				);
			return { ...node, nestedFields: updatedNode };
		};
		return tree.map((node) => traverseNode(node, id, item));
	};

	const updateNode = (tree, id, item) => {
		const traverseNode = (node, id, item) => {
			if (node.id === id) {
				return { ...node, ...item };
			}
			let updatedNode = [];
			if (node.nestedFields.length !== 0)
				updatedNode = node.nestedFields.map((node) =>
					traverseNode(node, id, item)
				);
			return { ...node, nestedFields: updatedNode };
		};
		return tree.map((node) => traverseNode(node, id, item));
	};

	const deleteNode = (tree, id) => {
		const traverseNode = (node, id) => {
			if (node.id === id) {
				return null;
			}
			let updatedNode = [];
			if (node.nestedFields.length !== 0) {
				updatedNode = node.nestedFields.map((node) =>
					traverseNode(node, id)
				);
				updatedNode = updatedNode.filter((node) => node !== null);
			}
			return { ...node, nestedFields: updatedNode };
		};
		const updatedTree = tree.map((node) => traverseNode(node, id));
		return updatedTree.filter((node) => node !== null);
	};

	return { insertNode, updateNode, deleteNode };
};

export default useTraverseTree;
