import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import classes from './SectionTitle.module.scss';

class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.titleBox = React.createRef();
        this.title = React.createRef();
        this.titleBg = React.createRef();
    }

    state = {
        titleBgStyles: {},
        titleFontSize: null
    }

    measureElement = element => {
        const DOMNode = ReactDOM.findDOMNode(element);
        const rectInfo = DOMNode.getBoundingClientRect();

        return {
            width: rectInfo.width,
            height: rectInfo.height
        };
    }

    componentDidMount() {
        let titleWidth, titleHeight, newTitleBgWidth;

        const win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0],
            maxWidth = win.innerWidth || docElem.clientWidth || body.clientWidth;

        setTimeout(() => {
            const titleDimensions = this.measureElement(this.title.current);
            titleWidth = titleDimensions.width;
            titleHeight = titleDimensions.height;

            const titleBoxStyle = this.titleBox.current.currentStyle || window.getComputedStyle(this.titleBox.current);
            const marginLeftOfTitleBox = parseInt(titleBoxStyle.marginLeft, 10);
            const marginRightOfTitleBox = parseInt(titleBoxStyle.marginRight, 10);

            // Title background data
            const titleBgStyle = window.getComputedStyle(this.titleBg.current);
            const titleBgTransformValue = titleBgStyle.getPropertyValue("-webkit-transform") ||
                titleBgStyle.getPropertyValue("-moz-transform") ||
                titleBgStyle.getPropertyValue("-ms-transform") ||
                titleBgStyle.getPropertyValue("-o-transform") ||
                titleBgStyle.getPropertyValue("transform") ||
                "fail...";
            let values = titleBgTransformValue.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            const titleBgXTranslation = values[4];

            // Calculations to set the width of title background
            if (titleWidth >= (maxWidth - marginLeftOfTitleBox - marginRightOfTitleBox - titleBgXTranslation)) {
                newTitleBgWidth = titleWidth - marginLeftOfTitleBox;
                newTitleBgWidth -= marginRightOfTitleBox;
            } else {
                newTitleBgWidth = titleWidth;
            }

            const titleBgStyles = {
                width: newTitleBgWidth + 'px',
                height: titleHeight + 'px'
            }

            if (this.state.titleBgStyles !== titleBgStyles) {
                this.setState({
                    titleBgStyles
                })
            }
        }, 400)
    }




    render() {
        const SpecificComponent = this.props.tag;

        return (
            <div className={classes.titleBox} ref={this.titleBox}>
                <div
                    className={[classes.titleBg, classes[this.props.bgColor]].join(' ')}
                    style={this.state.titleBgStyles}
                    ref={this.titleBg}
                ></div>

                <SpecificComponent
                    className={
                        this.props.longTitle
                        ? [classes.title, classes.longTitle].join(' ')
                        : classes.title
                    }
                    ref={this.title}
                >{this.props.children}</SpecificComponent>

            </div>
        );
    }
}

SectionTitle.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2']),
    bgColor: PropTypes.oneOf(['orange', null]),
    longTitle: PropTypes.bool
}

SectionTitle.defaultProps = {
    tag: 'h1',
    bgColor: null,
    longTitle: false
}

export default SectionTitle