import React, { useRef } from 'react'
import './BudgetSlider.scss'

class BudgetSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    onUpdate(e) {
        this.props.setCost(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="budgetslider">
                <label className="budgetslider__price">
                    0원 - {this.state.value} 원
                </label>
                <input
                    className="budgetslider__range"
                    list="tickmarks"
                    max={100000}
                    onChange={e => this.onUpdate(e)}
                    step={1000}
                    type="range"
                    value={this.state.value}/>
            </div>
        )
    }
}

export default BudgetSlider;

