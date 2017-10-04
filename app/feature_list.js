var React = require("react");
var ReactDOM = require("react-dom");
import SubFeatureList from "./subfeature_list.js"

class FeatureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childVisible: false
    }
  }

  onClick() {
    // console.log()
    this.setState({childVisible: !this.state.childVisible});
  }

  render() {
    const allFeatures = this.props.features

    return (
      <div>
        <ul>
          {allFeatures.map((feature, index) => {
            if (feature.presence === false) {
              return <li key={index}> Sorry, but {feature.title} is not available </li>
            }

            if (feature.subfeatures.length > 0) {
              return (
                <div>
                  <li key={index}>{feature.title}</li>
                  <button onClick={this.onClick.bind(this)}></button>
                  {this.state.childVisible ? <SubFeatureList subfeatures={feature.subfeatures}/> : null}
                </div>
              )
            }

            return <li key={index}>{feature.title } </li>
          })}
        </ul>
      </div>
    )
  }
}



export default FeatureList;
