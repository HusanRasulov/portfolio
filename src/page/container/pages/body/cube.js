import React, { Component } from "react";
import Radium from "radium";

const styles = {
    cubeContainer: {
        height: "200px",
        width: "200px",
        position: "relative",
        perspective: "1000px"
    },
    cube: {
        height: "100%",
        width: "100%",
        position: "absolute",
        transformStyle: "preserve-3d",
        transform: "translateZ(-400px)",
        ":hover": {},
        transition: "transform 1s, rotate 1s"
    },
    face: {
        width: "200px",
        height: "200px",
        display: "block",
        position: "absolute",
        border: "4px solid hsla(   180, 100%, 50%, 0.5 )",
        transition: "transform 1s",
        color: "white",
        fontSize: 0,
        textAlign: "center",
        lineHeight: "200px",
        background: "hsla(   180, 100%, 50%, 0.5 )",
        boxShadow: "0px 0px 80px 10px hsla(   180, 100%, 50%, 0.5 )"
    },
    front: {
        transform: "rotateY(   0deg ) translateZ( 100px )"
    },
    back: {
        transform: "rotateX( 180deg ) translateZ( 100px )"
    },
    left: {
        transform: "rotateY( -90deg ) translateZ( 100px )"
    },
    right: {
        transform: "rotateY(  90deg ) translateZ( 100px )"
    },
    top: {
        transform: "rotateX(  90deg ) translateZ( 100px )"
    },
    bottom: {
        transform: "rotateX( -90deg ) translateZ( 100px )"
    }
};

class Cube extends Component {
    state = {
        intervallId: null,
        degX: 0
    };
    interpolate = () => {};
    componentDidMount() {
        let { degX } = this.state;
        const intervallId = setInterval(() => {
            degX = degX + 1 % 360;
            this.setState({
                degX
            });
        }, 200);
        this.setState({ intervallId });
    }
    componentWillUnmount() {
        clearInterval(this.state.intervallId);
        this.setState({
            intervallId: null
        });
    }
    render() {
        const { degX } = this.state;
        return (
            <div style={styles.cubeContainer}>
                <div
                    style={[
                        styles.cube,
                        {
                            transform: `translateZ(-400px) rotate3d(0, 1, 1, ${degX}deg)`
                        }
                    ]}
                >
                    <div style={[styles.face, styles.front]}>front</div>
                    <div style={[styles.face, styles.back]}>back</div>
                    <div style={[styles.face, styles.left]}>left</div>
                    <div style={[styles.face, styles.right]}>right</div>
                    <div style={[styles.face, styles.top]}>top</div>
                    <div style={[styles.face, styles.bottom]}>bottom</div>
                </div>
            </div>
        );
    }
}

export default Radium(Cube);