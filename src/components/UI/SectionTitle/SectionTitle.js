import React from 'react';
import ReactDOM from "react-dom";

import classes from './SectionTitle.module.scss';

class SectionTitle extends React.Component {
    state = {
        titleBgStyles: {}
    }

    measureElement = element => {
        const DOMNode = ReactDOM.findDOMNode(element);
        const rectInfo = DOMNode.getBoundingClientRect();

        return {
            width: rectInfo.width,
            height: rectInfo.height
        };
    }

    componentDidMount(prevProps, prevState) {
        const title = document.querySelector('.' + classes.title);
        const titleBox = document.querySelector('.' + classes.titleBox);
        const titleBg = document.querySelector('.' + classes.titleBg);
        let titleWidth, titleHeight, newTitleBgWidth;

        setTimeout(() => {
            titleWidth = this.measureElement(title).width;
            titleHeight = this.measureElement(title).height;

            const win = window,
                doc = document,
                docElem = doc.documentElement,
                body = doc.getElementsByTagName('body')[0],
                maxWidth = win.innerWidth || docElem.clientWidth || body.clientWidth;

            const titleBoxStyle = titleBox.currentStyle || window.getComputedStyle(titleBox);
            const marginLeftOfTitleBox = parseInt(titleBoxStyle.marginLeft, 10);
            const marginRightOfTitleBox = parseInt(titleBoxStyle.marginRight, 10);

            // Title background data
            const titleBgStyle = window.getComputedStyle(titleBg);
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
        const component = {
            h1: 'h1',
            h2: 'h2'
        }

        const BgColor = {
            orange: 'orangeColor'
        }

        const SpecificComponent = this.props.tag ? component[this.props.tag] : 'h1';

        const titleFontSize = this.props.fontSize ? this.props.fontSize : null;
        const titleStyles = titleFontSize ? { fontSize: titleFontSize } : null;

        const titleBgColorClass = this.props.color ? BgColor[this.props.color] : null;

        return (
            <div className={classes.titleBox}>
                <div className={[classes.titleBg, classes[titleBgColorClass]].join(' ')} style={this.state.titleBgStyles}></div>

                <SpecificComponent className={classes.title} style={titleStyles}>{this.props.children}</SpecificComponent>

            </div>
        );
    }
}

export default SectionTitle