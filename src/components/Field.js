import React, { Component } from 'react';


class Field extends Component {

    state = {
        keyName: '',
        keyPlaceholder: 'Key name',
        typedString: '',
        stringPlaceholder: "Your text here",
        selectDefaultValue: 'choose',
        secondFieldChoice: null,
        thirdFieldChoice: null,
        fieldOk: false,
        emptyKey: false
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.update !== nextProps.update) {
        this.setState({
        keyName: '',
        keyPlaceholder: 'Key name',
        typedString: '',
        stringPlaceholder: "Your text here",
        selectDefaultValue: 'choose',
        secondFieldChoice: null,
        thirdFieldChoice: null,
        fieldOk: false,
        emptyKey: false })
        }
    }

    handleFirstInput = async (event) => {
        if(!this.props.editing) {
        this.setState({ keyName: event, emptyKey: false, keyPlaceholder: 'Key name' })
        } else {
        this.setState({
            keyName: event,
            emptyKey: false,
            selectDefaultValue: 'choose',
            fieldOk: false,
            secondFieldChoice: null,
            thirdFieldChoice: null })                        
        }
    }

    second = (x) => {
        switch(x) {
            case "string":
            this.setState({ secondFieldChoice: 'string', thirdFieldChoice: null, fieldOk: false, typedString: '', selectDefaultValue: 'text' })
            break

            case "number":
            this.setState({ secondFieldChoice: 'number', thirdFieldChoice: null, fieldOk: false, typedString: '', selectDefaultValue: 'number' })
            break

            case "img":
            this.setState({ secondFieldChoice: 'img', thirdFieldChoice: null, fieldOk: false, typedString: '', selectDefaultValue: 'img' })
            break

            case "bool":
            this.setState({ secondFieldChoice: 'bool', thirdFieldChoice: null, fieldOk: false, typedString: '', selectDefaultValue: 'bool' })
            break
            
            case "id": 
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'id';
                newKey.id = this.props.id;
                this.setState({ secondFieldChoice: null, thirdFieldChoice: null, fieldOk: true, typedString: '', selectDefaultValue: 'id' });
                this.props.objCreator(newKey);
            }        
            break

            case "true":
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'true';
                newKey.id = this.props.id;
                this.setState({ secondFieldChoice: null, thirdFieldChoice: null, fieldOk: true, typedString: '', selectDefaultValue: 'true' });
                this.props.objCreator(newKey);
            }        
            break

            case "false":
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'false';
                newKey.id = this.props.id;
                this.setState({ secondFieldChoice: null, thirdFieldChoice: null, fieldOk: true, typedString: '', selectDefaultValue: 'false' });
                this.props.objCreator(newKey);
            }        
            break

            case "getBool":
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'getBool';
                newKey.id = this.props.id;
                this.setState({ secondFieldChoice: null, thirdFieldChoice: null, fieldOk: true, typedString: '', selectDefaultValue: 'getBool' });
                this.props.objCreator(newKey);
            }        
            break

            default:
            console.log('default')
        }
    }
    third = (x) => {
        switch(x) {
            case "text":
            this.setState({ thirdFieldChoice: 'text', fieldOk: false });
            break

            case "number":
            this.setState({ thirdFieldChoice: 'number', fieldOk: false });
            break

            case "friends": 
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'friends';
                newKey.id = this.props.id;
                this.setState({ thirdFieldChoice: null, fieldOk: true, typedString: '', emptyKey: false });
                this.props.objCreator(newKey);
            }        
            break

            case "himym": 
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'himym';
                newKey.id = this.props.id;
                this.setState({ thirdFieldChoice: null, fieldOk: true, typedString: '', emptyKey: false });
                this.props.objCreator(newKey);
            } 
            break

            case "cities": 
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'cities';
                newKey.id = this.props.id;
                this.setState({ thirdFieldChoice: null, fieldOk: true, typedString: '', emptyKey: false });
                this.props.objCreator(newKey);
            } 
            break

            case "year":
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'year';
                newKey.id = this.props.id;
                this.setState({ thirdFieldChoice: null, fieldOk: true, typedString: '', emptyKey: false });
                this.props.objCreator(newKey);
            }      
            break

            case "18to90":
             if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = '18to90';
                newKey.id = this.props.id;
                this.setState({ thirdFieldChoice: null, fieldOk: true, typedString: '', emptyKey: false });
                this.props.objCreator(newKey);
            }        
            break

            case "600":
            if(this.state.keyName === '') {
                this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name', secondFieldChoice: null, selectDefaultValue: 'choose' });
            } else {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = '600';
                newKey.id = this.props.id;
                this.setState({ thirdFieldChoice: null, fieldOk: true, typedString: '', emptyKey: false });
                this.props.objCreator(newKey);
            }        
            break

            default:
            console.log('default')
        }
    }

    stringSubmit = (newKey) => {
        if(this.state.keyName === '') {
            this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name' });
        } else {
            let newKey = {};
            newKey.name = this.state.keyName;
            newKey.body = this.state.typedString;
            newKey.id = this.props.id;
            this.props.objCreator(newKey);
            this.setState({ fieldOk: true });
        }
    }

    numberSubmit = (newKey) => {
        if(this.state.keyName === '') {
            this.setState({ emptyKey: true, keyPlaceholder: 'Please insert a key name' });
        } else {
            let newKey = {};
            newKey.name = this.state.keyName;
            newKey.body = Number(this.state.typedString);
            newKey.id = this.props.id;
            this.props.objCreator(newKey);
            this.setState({ fieldOk: true });
        }
    }

  render() {
    return (
        <div className="field-container">
            <div className="first-field">
                <input
                className={this.state.emptyKey ? "inputs-error" : "inputs"}
                type="text"
                placeholder={this.state.keyPlaceholder}
                value={this.state.keyName}
                onChange={(event) => this.handleFirstInput(event.target.value)}/>                
            </div>
            <div className="colon">:</div>
            <div className="second-field">
                <div className="field-item">
                    <select
                    className={this.state.fieldOk ? "inputs-ok" : "inputs"}
                    value={this.state.selectDefaultValue}
                    onChange={(event) => this.second(event.target.value)}>
                        <option value="choose" disabled>Options</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="img">Img URL</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                        <option value="getBool">True or False</option>
                        <option value="id">Unique ID</option>
                    </select>
                </div>
                <div className="field-item">                    
                    {this.state.secondFieldChoice === 'string' &&
                    <select className={this.state.fieldOk ? "inputs-ok" : "inputs"} defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Options</option>
                        <option value="text">Custom</option>
                        <option value="friends">Random F.R.I.E.N.D.S character</option>
                        <option value="himym">Random HIMYM character</option>
                        <option value="cities">Random City</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'number' &&
                    <select className={this.state.fieldOk ? "inputs-ok" : "inputs"} defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Options</option>
                        <option value="number">Custom</option>
                        <option value="year">Random year from 1940</option>
                        <option value="18to90">Random age</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'img' &&
                    <select className={this.state.fieldOk ? "inputs-ok" : "inputs"} defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Options</option>
                        <option value="text">Custom</option>
                        <option value="600">Random 600x600px image</option>
                    </select>
                    }
                </div>
                {this.state.thirdFieldChoice === 'number' &&
                    <div className="field-item">
                    <input className={this.state.fieldOk ? "inputs-ok" : "inputs"} type="text" placeholder={this.state.stringPlaceholder} value={this.state.typedString} onChange={(event) => this.setState({ typedString: event.target.value })}/>
                    <button className="button" onClick={this.numberSubmit}>OK</button>
                    </div>
                }
                {this.state.thirdFieldChoice === 'text' &&
                    <div className="field-item">
                    <input className={this.state.fieldOk ? "inputs-ok" : "inputs"} type="text" placeholder={this.state.stringPlaceholder} value={this.state.typedString} onChange={(event) => this.setState({ typedString: event.target.value })}/>
                    <button className="button" onClick={this.stringSubmit}>OK</button>
                    </div>
                }
                
            </div>
        </div>
    );
  }
}

export default Field;

