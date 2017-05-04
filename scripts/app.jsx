import React from 'react';
import styles from "../style.css";
import {Bond} from 'oo7';
import {TextBond, Rspan} from 'oo7-react';

export class App extends React.Component {
    constructor() {
        super();
        this.bond1 = new Bond();
        this.bond2 = new Bond();
        this.bond3 = new Bond();
        this.bond4 = new Bond();
        this.bond21 = new Bond();
        this.bond22 = new Bond();
        this.bond23 = new Bond();
        this.bond24 = new Bond();
        this.bond25 = new Bond();
        this.bond26 = new Bond();
        this.bond27 = new Bond();
    }
	render() {
		return (
            <div>
                <b>origanization:</b>
                <br />
                <TextBond bond={this.bond1} floatingLabelText="type the number."/>
                <TextBond bond={this.bond2} floatingLabelText="type the name."/>
                <TextBond bond={this.bond3} floatingLabelText="type the property."/>
                <TextBond bond={this.bond4} floatingLabelText="type the name in charge."/>
                <br />
                <Rspan>{this.bond1}-</Rspan>
                <Rspan>{this.bond2}-</Rspan>
                <Rspan>{this.bond3}-</Rspan>
                <Rspan>{this.bond4}-</Rspan>
                <br />
                <br />
                <input name="" type="button" value="upload"/>
                <br />
                <br />
                <b>infomation:</b>
                <br />
                <TextBond bond={this.bond21} floatingLabelText="type the number of website."/>
                <TextBond bond={this.bond22} floatingLabelText="type the number of the originization."/>
                <TextBond bond={this.bond23} floatingLabelText="type the status."/>
                <TextBond bond={this.bond24} floatingLabelText="type the domain."/>
                <br />
                <Rspan>{this.bond21}-</Rspan>
                <Rspan>{this.bond22}-</Rspan>
                <Rspan>{this.bond23}-</Rspan>
                <Rspan>{this.bond24}-</Rspan>
                <br />
                <TextBond bond={this.bond25} floatingLabelText="type the name."/>
                <TextBond bond={this.bond26} floatingLabelText="type the home."/>
                <TextBond bond={this.bond27} floatingLabelText="type the date."/>
                <br />
                <Rspan>{this.bond25}-</Rspan>
                <Rspan>{this.bond26}-</Rspan>
                <Rspan>{this.bond27}-</Rspan>
                <br />
                <br />
                <input name="" type="button" value="upload"/>
		    </div>);
//                <Rspan>{this.bond}</Rspan>
//                <Rspan>{parity.bonds.height}</Rspan>
	}
}
