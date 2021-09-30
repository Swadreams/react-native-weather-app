import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  dispatchFetchCurrentWeather,
  dispatchFetchHistoricalWeather,
} from '../../actions/weatherActions';
class WeatherDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        obsDate: null,
        obsTemp: 0,
        obsWind: 0,
        conditions: null,
      },
      historical: {
        obsDate: null,
        obsMaxTemp: 0,
        obsMinTemp: 0,
        name: '',
        country: '',
        region: '',
      },
    };
  }
  componentDidMount = () => {
    this.props.dispatchFetchCurrentWeather();
    this.props.dispatchFetchHistoricalWeather();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.currentWeather !== this.props.currentWeather) {
      this.setState({
        current: {
          obsDate: this.props.currentWeather.observation_time,
          obsTemp: this.props.currentWeather.temperature,
          obsWind: this.props.currentWeather.wind_speed,
          conditions: this.props.currentWeather.weather_descriptions,
        },
      });
    }
    if (prevProps.historicalWeather !== this.props.historicalWeather) {
      const {historical, location} = this.props.historicalWeather;
      const wx = historical['2021-03-20'];
      this.setState({
        historical: {
          obsDate: wx.date,
          obsMaxTemp: wx.maxtemp,
          obsMinTemp: wx.mintemp,
          name: location.name,
          region: location.region,
          country: location.country,
        },
      });
    }
  };

  render() {
    const {current, historical} = this.state;
    return (
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 10,
              fontWeight: 'bold',
            }}>
            {`Current Conditions for ${this.props.currentLocation.name}, ${this.props.currentLocation.region}, ${this.props.currentLocation.country}`}
          </Text>
        </View>
        {this.state && (
          <View style={{marginLeft: 10}}>
            <Text>{`Observation Date: ${current.obsDate}`}</Text>
            <Text>{`Temperature: ${current.obsTemp} °F`}</Text>
            <Text>{`Wind Speed: ${current.obsWind} MPH`}</Text>
            <Text>{`Conditions: ${current.conditions}`}</Text>
          </View>
        )}
        <View>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 10,
              fontWeight: 'bold',
            }}>
            {`Historical Conditions for ${historical.name}, ${historical.region}, ${historical.country} on ${historical.obsDate}`}
          </Text>
        </View>
        {this.state && (
          <View style={{marginLeft: 10}}>
            <Text>{`Observation Date: ${historical.obsDate}`}</Text>
            <Text>{`Max Temp: ${historical.obsMaxTemp} °F`}</Text>
            <Text>{`Min Temp: ${historical.obsMinTemp} °F`}</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.weather.currentLocation,
  currentWeather: state.weather.currentWeather,
  historicalWeather: state.weather.historicalWeather,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      dispatchFetchCurrentWeather,
      dispatchFetchHistoricalWeather,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
