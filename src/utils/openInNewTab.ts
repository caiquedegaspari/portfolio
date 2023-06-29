const openNewTab = (url: string, isPdf?: boolean) => {
	window.open(url, isPdf ? '_blank' : undefined);
};

export { openNewTab };
