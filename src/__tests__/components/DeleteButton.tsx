import React from "react";
import { shallow, mount } from "enzyme";
import DeleteButton from "components/DeleteButton";

it("renders", () => {
  shallow(<DeleteButton handleDelete={() => {}} />);
});

it("mounts", () => {
  mount(<DeleteButton handleDelete={() => {}} />);
});
