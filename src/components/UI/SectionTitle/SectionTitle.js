import React from 'react';

import classes from './SectionTitle.module.scss';

class SectionTitle extends React.Component {
    state = {
        titleBgStyles: {}
    }

    componentDidMount() {
        const title = document.querySelector('.' + classes.title);
        const titleBox = document.querySelector('.' + classes.titleBox);
        let titleWidth = title.offsetWidth;
        const titleHeight = title.offsetHeight;
        const maxWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
        const titleBoxStyle = titleBox.currentStyle || window.getComputedStyle(titleBox);
        const marginLeftOfTitle = parseInt(titleBoxStyle.marginLeft, 10)
        
        if (titleWidth >= (maxWidth - marginLeftOfTitle)) {
            titleWidth -= 40;
        }
        
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
                <SpecificComponent className={classes.title}>{this.props.children}</SpecificComponent>
            </div>
        );
    }
}

export default SectionTitle