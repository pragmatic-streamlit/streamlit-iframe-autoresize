import {Streamlit, StreamlitComponentBase, withStreamlitConnection} from "streamlit-component-lib";
import React, {ReactNode} from "react";
import IframeResizer from "iframe-resizer-react";

interface State {}


class App extends StreamlitComponentBase<State> {

    componentDidMount(): void {
        Streamlit.setFrameHeight()
    }

    componentDidUpdate(): void {
        Streamlit.setFrameHeight()
    }
    
    forceResize(): void {
        Streamlit.setFrameHeight()
    }
    
    public render = (): ReactNode => {
        const url = this.props.args["url"]
        return <IframeResizer
            heightCalculationMethod="lowestElement"
            frameBorder="0"
            log
            src={url}
            onResized={this.forceResize}
            style={{ width: '1px', minWidth: '100%'}}
        />
    }
}
export default withStreamlitConnection(App)