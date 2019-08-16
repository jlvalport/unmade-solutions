import React from 'react';

import classes from './SectionTitle.module.scss';

class SectionTitle extends React.Component {
    state = {
        titleBgStyles: {}
    }

    componentDidMount() {
        const titleWidth = document.querySelector('.' + classes.title).offsetWidth;
        const titleHeight = document.querySelector('.' + classes.title).offsetHeight;
        this.setState({
            titleBgStyles: {
                width: titleWidth + 'px',
                height: titleHeight + 'px'
            }
        })
    }

    render() {
        const component = {
            h1: 'h1',
            h2: 'h2'
        }
        const SpecificComponent = component[this.props.tag];

        return (
            <div className={classes.titleBox}>
                <div className={classes.titleBg} style={this.state.titleBgStyles}></div>
                <SpecificComponent className={classes.title}> {this.props.children}</SpecificComponent>
            </div>
        );
    }
}

export default SectionTitle