import { useState } from "react";

export default function () {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    avalabilities: [
      {
        availabilityId: "",
        day: [
          { value: "sun", name: " Home/Dashbord" },
          { value: "mon", name: "Helpdesk" },
          { value: "tue", name: "Assets" },
          { value: "wed", name: "Daily Tasks" },
          { value: "thur", name: "PPM" },
          { value: "fri", name: "Employees" },
          { value: "sat", name: "Profile" },
        ],
        isChecked: false,
        checked: false,
        allChecked: false,
        error: null,
      },
    ],
  });

  const checkedHandler = (e, avIndex, index) => {
    console.log(e.target.checked, avIndex, index);
    setState((prev) => {
      let newState = { ...prev };
      newState.avalabilities[avIndex].day[index].checked = e.target.checked;
      return newState;
    });
  };

  return (
    <>
      {state.avalabilities.map((av, avIndex) => (
        <div key={av.availabilityId}>
          {av.day.map((item, index) => (
            <div key={index}>
              <input
                checked={item?.checked || false}
                onChange={(e) => checkedHandler(e, avIndex, index)}
                type="checkbox"
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
