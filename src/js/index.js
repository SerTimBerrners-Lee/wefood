


function eSelectnNodes(last_element, new_element, className) {
	if (last_element?.classList.contains(className))
		last_element.classList.remove(className);

	if (!new_element?.classList.contains(className))
		new_element?.classList.add(className);
	
	return new_element;
}


export {
	eSelectnNodes
}
