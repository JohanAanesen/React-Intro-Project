import React, { Component, Fragment, useState, useEffect } from "react";
import initialMembers from "../members";

export default function Profile({match}) {
	const [person, setPerson] = useState({});

	useEffect(() => {
		const id = match.params.id;

		const personById = initialMembers.find(m => m.id === Number(id));

		setPerson(personById);
	}, []);

	return (
		<div>
			<h2>
				{person.name} has a bounty of {person.bounty} NOK
			</h2>
		</div>
	);
}
