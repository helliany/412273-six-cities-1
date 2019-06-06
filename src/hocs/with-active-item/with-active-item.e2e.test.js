import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withActiveItem from "./with-active-item";

Enzyme.configure({adapter: new Adapter()});

const ComponentWrapped = withActiveItem(() => <div />);

it(`Adds active item to state`, () => {
  const element = shallow(<ComponentWrapped />);

  expect(element.props().activeItem).toEqual(null);
  element.props().onActiveItemChange(`active`);
  expect(element.props().activeItem).toEqual(`active`);
});
