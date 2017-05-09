import React from 'react';
import styles from "../style.css";
import {Bond} from 'oo7';
import {RRaisedButton, TextBond, Rspan} from 'oo7-react';
import {makeContract, formatBalance, isNullData} from 'oo7-parity';

const orgABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "org",
    "outputs": [
      {
        "name": "num",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "property",
        "type": "uint8"
      },
      {
        "name": "principle",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "get_org",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }, {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint8"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "num",
        "type": "uint256"
      },
      {
        "name": "name", "type": "string"
      },
      {
        "name": "property",
        "type": "uint8"
      },
      {
        "name": "principle",
        "type": "string"
      }
    ],
    "name": "upload_org",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "Upload_org",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "Get_org",
    "type": "event"
  }
];

export class App extends React.Component {
    constructor() {
        super();
        this.org = parity.bonds.makeContract('0x2D0f860846A3c890199dDf3fb2D6C19A48C3807C', orgABI);
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
        this.state = {current: null};
    }
    give() {
        this.setState({
            current:this.org.get_org(1) 
        }) 
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
                <RRaisedButton 
                    label="upload"
                    onClick={this.give.bind(this)}
                />
                <br />
                <br />
                <Rspan>{this.state.current && this.state.current.map(JSON.stringify)}</Rspan>
                <br />
                <Rspan>{this.user}</Rspan>
                <Rspan>{this.node1}</Rspan>
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
                <RRaisedButton 
                    label="upload"
                    onClick={() =>alert("hello world")}
                />
		    </div>);
	}
}
