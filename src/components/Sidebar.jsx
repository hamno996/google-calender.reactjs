import React from "react";
import CresteEventButton from "./CresteEventButton";
import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";

function Sidebar() {
	return (
		<aside className="border p-5 w-64">
			<CresteEventButton />
			<SmallCalendar />
			<Labels />
		</aside>
	);
}

export default Sidebar;
