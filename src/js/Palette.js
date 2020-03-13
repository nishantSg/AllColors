import React, { Component } from "react";
import ColorBox from "./colorBox";
import Navbar from "./Navbar";
import "../css/Palette.css";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
	}
	changeLevel = level => {
		this.setState({ level });
	};

	render() {
		const { colors } = this.props.palette;
		let { level } = this.state;
		const boxes = colors[level].map(color => (
			<ColorBox background={color.hex} name={color.name} />
		));
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} />
				<div className="Palette-colors">{boxes}</div>
			</div>
		);
	}
}

export default Palette;
