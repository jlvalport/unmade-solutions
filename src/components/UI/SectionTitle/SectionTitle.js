import React from 'react';
import ReactDOM from "react-dom";

import classes from './SectionTitle.module.scss';

class SectionTitle extends React.Component {
    state = {
        titleBgStyles: {}
    }

    measureElement = element => {
        const DOMNode = ReactDOM.findDOMNode(element);
        return {
            width: DOMNode.offsetWidth,
            height: DOMNode.offsetHeight,
        };
    }

    componentDidMount(prevProps, prevState) {


        const title = document.querySelector('.' + classes.title);
        const titleBox = document.querySelector('.' + classes.titleBox);
        let titleWidth, titleHeight;


        setTimeout(() => {
            titleWidth = this.measureElement(title).width;
            titleHeight = this.measureElement(title).height;
            const maxWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
            const titleBoxStyle = titleBox.currentStyle || window.getComputedStyle(titleBox);
            const marginLeftOfTitle = parseInt(titleBoxStyle.marginLeft, 10);
            const marginRightOfTitle = parseInt(titleBoxStyle.marginRight, 10);

            if (titleWidth >= (maxWidth - marginLeftOfTitle - marginRightOfTitle)) {
                titleWidth -= marginLeftOfTitle;
                titleWidth -= marginRightOfTitle;
            }

            const titleBgStyles = {
                width: titleWidth + 'px',
                height: titleHeight + 'px'
            }

            if (this.state.titleBgStyles !== titleBgStyles) {
                this.setState({
                    titleBgStyles
                })
            }
            console.log(titleHeight);

        }, 300)
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
        const titleStyles = titleFontSize ? {fontSize: titleFontSize} : null;

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